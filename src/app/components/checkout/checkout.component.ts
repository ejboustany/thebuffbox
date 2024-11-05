import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe, StripeElements, StripeCardElement, StripeCardNumberElement, StripeCardExpiryElement } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/services/payment.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
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
  order: any = {};
  constructor(private http: HttpClient, private paymentService: PaymentService, private route: ActivatedRoute, private orderService: OrderService) {
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

  async ngOnInit() {
    Stripe = await loadStripe('pk_test_51OKudgHBiPwJgahsQu1sSsFrRuqF0SZjVjdaA9yC95MprKlXd2wjZs7q0a7c3JSyjT75zyoIZWzzCSLX53wKflo500nBm6EFJp'); // Replace with your publishable key

    if (Stripe) {
      this.elements = Stripe.elements();
      if (this.elements) {
        this.cardElement = this.elements.create('card', { style: this.getCardStyle() });
        this.cardElement.mount('#card-element'); // Mount Stripe card element
      }
    }

    // Fetch PaymentIntent client secret from the backend
    this.createStripePayment();
  }

  loadingPayment = false;
  createStripePayment() {
    this.loadingPayment = true;

    this.paymentService.createPaymentIntent(this.orderId).subscribe(
      res => {
        // var stripe = Stripe(res.publicKey);
        this.clientSecret = res.clientSecret;

        // stripe.redirectToCheckout({
        //   sessionId: res.sessionId
        // }).then(() => {
        //   // Handle any post-payment logic here if needed
        // }).finally(() => {
        //   this.loadingPayment = false; // Set loadingPayment to false when payment process is complete
        // });
      },
      error => {
        // Handle API error here
        console.error("API error:", error);
        // Set loadingPayment to false in case of error
        this.loadingPayment = false;
      }
    );
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

  async handlePayment() {
    if (Stripe && this.cardElement) {
      const { error, paymentIntent } = await Stripe.confirmCardPayment(this.clientSecret, {
        payment_method: {
          card: this.cardElement,
          billing_details: { name: this.order.identityEmail },
        },
      });
  
      console.log(error);
        
      console.log(paymentIntent);
      if (error) {
        const errorMessage = document.getElementById('card-errors')!;
        errorMessage.classList.remove('hidden');
      } else if (paymentIntent?.status === 'succeeded') {
        // Send payment status to backend for verification
        this.paymentService.verifyPayment(paymentIntent.id).subscribe(
          res => {
            alert("payment succeeded!")
          },
          error => {
            // Handle API error here
            console.error("API error:", error);
            // Set loadingPayment to false in case of error
            this.loadingPayment = false;
          }
        );
      }
    } else {
      alert('Stripe not initialized correctly.');
    }
  }
}
