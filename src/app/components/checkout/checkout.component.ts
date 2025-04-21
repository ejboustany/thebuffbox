import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe, StripeElements, StripeCardElement, StripeCardNumberElement, StripeCardExpiryElement } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { AccountService } from 'src/app/services/account.service';
declare var Stripe: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  elements: StripeElements | null = null;
  cardElement: StripeCardElement | null = null;
  clientSecret: string = '';
  orderId: number;
  order: any = { identity: {
    firstName: '',
    lastName: '',
    shippingAddress: {
      street1: '',
      street2: '',
      city: '',
      state: '',
      postalCode: ''
    }
  }, };

  requiredFields = [
    'firstName', 
    'lastName', 
    'street1', 
    'city', 
    'state', 
    'postalCode'
  ];
  touchedFields: {[key: string]: boolean} = {};
  formSubmitted = false;

  // Mark a field as touched when user interacts with it
  markAsTouched(fieldName: string): void {
    this.touchedFields[fieldName] = true;
  }

  // Check if a field is valid (has a value if required)
  isFieldValid(fieldName: string): boolean {
    if (fieldName === 'firstName' || fieldName === 'lastName') {
      return !!this.order.identity[fieldName];
    } else if (['street1', 'city', 'state', 'postalCode'].includes(fieldName)) {
      return !!this.order.identity.shippingAddress[fieldName];
    }
    return true;
  }
  // Check if a field should show an error
  shouldShowError(fieldName: string): boolean {
    return (this.touchedFields[fieldName] || this.formSubmitted) && !this.isFieldValid(fieldName);
  }

  // Validate the entire form
  validateForm(): boolean {
    let isValid = true;
    
    for (const field of this.requiredFields) {
      if (!this.isFieldValid(field)) {
        isValid = false;
      }
    }
    
    return isValid;
  }


  deliveryDuration: number = 0;

  constructor(private http: HttpClient, private paymentService: PaymentService, private route: ActivatedRoute, 
    private orderService: OrderService, private router: Router, private accountService: AccountService) {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    });
    this.getCheckoutOrder(this.orderId);
  }

  getCheckoutOrder(orderId: number) {
    return this.orderService.getCheckoutOrder(orderId).subscribe((res: any) => {
      this.order = res;
    });
  }

  inputValue: string = '';

  async ngOnInit() {
    Stripe = await loadStripe('pk_test_51OKudgHBiPwJgahsQu1sSsFrRuqF0SZjVjdaA9yC95MprKlXd2wjZs7q0a7c3JSyjT75zyoIZWzzCSLX53wKflo500nBm6EFJp'); // Replace with your publishable key

    if (Stripe) {
      this.elements = Stripe.elements();
      if (this.elements) {
        this.cardElement = this.elements.create('card', { style: this.getCardStyle() });
        this.cardElement.mount('#card-element'); // Mount Stripe card element
      }
    }

    this.addInputListeners();
  }

  getCardStyle() {
    return {
      base: {
        fontSize: '16px',
        color: '#32325d',
        '::placeholder': { color: '#a0aec0' }, // Placeholder color
      },
      invalid: { color: '#e53e3e' }, // Invalid input color
    };
  }

  addInputListeners(): void {
    setTimeout(() => {
      const inputFields = document.querySelectorAll('input');
      inputFields.forEach(input => {
        input.addEventListener('blur', () => {
          this.checkAllFieldsFilled();
        });
      });
    }, 0);
  }

  checkAllFieldsFilled(): void {
    const isFirstNameFilled = !!this.order.identity.firstName;
    const isLastNameFilled = !!this.order.identity.lastName;
    const isStreet1Filled = !!this.order.identity.shippingAddress.street1;
    const isCityFilled = !!this.order.identity.shippingAddress.city;
    const isStateFilled = !!this.order.identity.shippingAddress.state;
    const isPostalCodeFilled = !!this.order.identity.shippingAddress.postalCode;

    if (
      isFirstNameFilled && 
      isLastNameFilled && 
      isStreet1Filled && 
      isCityFilled && 
      isStateFilled && 
      isPostalCodeFilled
    ) {
      this.calculateTax();
    }
  }

  calculateTax() {
 
    return this.accountService.updateTax(this.order.identity, this.order.id).subscribe({
      next: (res: any) => {
        this.order = res;
     
      },
      error: (error: any) => {
        // Error handler
        console.error('Tax calculation error:', error);
        
        let errorMessage = "Failed to update tax information.";
        
        if (error.error?.message) {
          errorMessage = error.error.message;
        }
       
      }
    });
  }

  isProcessing = false;

  
  async handlePayment() {

    this.formSubmitted = true;
    


    if (Stripe && this.cardElement) {

    
      if(  !this.validateForm()){
        this.formSubmitted = false;
        return;
      }

      this.isProcessing = true;
      
      const { paymentMethod, error } = await Stripe.createPaymentMethod({
        type: 'card',
        card: this.cardElement,
      });

    const paymentMethodId = paymentMethod.id;

    await this.paymentService.createPaymentIntent(this.orderId, paymentMethodId, this.order.identity).subscribe(
      res => {
        this.clientSecret = res.clientSecret;

        this.paymentService.verifyPayment(this.clientSecret, paymentMethodId, this.deliveryDuration, this.orderId).subscribe(
              res => {
                this.router.navigate(["membership"]);
              },
              error => {
                // Handle API error here
                console.error("API error:", error);
                // Set loadingPayment to false in case of error
              }
            );
      },
      error => {
        // Handle API error here
        console.error("API error:", error);
        this.isProcessing = false;

      }
    );
    } else {
      alert('Stripe not initialized correctly.');
      this.isProcessing = false;

    }
  }
}
