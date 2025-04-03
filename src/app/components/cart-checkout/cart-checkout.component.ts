import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe, StripeElements, StripeCardElement, StripeCardNumberElement, StripeCardExpiryElement } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { AccountService } from 'src/app/services/account.service';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { Address } from 'src/app/models/address.model';
import { Image } from 'src/app/models/image.model';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var Stripe: any;


@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrl: './cart-checkout.component.css'
})
export class CartCheckoutComponent implements OnInit {
  elements: StripeElements | null = null;
  cardElement: StripeCardElement | null = null;
  clientSecret: string = '';
  deliveryDuration: number = 0;
  cart: any = {};

  constructor(private http: HttpClient, private paymentService: PaymentService, private route: ActivatedRoute,
    private snackBar: MatSnackBar, private router: Router, private cartService: CartService, private accountService: AccountService) {
    this.getCartById();
  }

  delteItem(id: number) {
    this.cartService.deleteItem(id).subscribe((res: any) => {
      this.updateCart();
    });
  }

  updateCart() {
    this.getCartById();
  }

  getCartById() {
    const storedCartId = localStorage.getItem('cartId');
    return this.cartService.getById(storedCartId).subscribe((res: any) => {
      this.cart = res.item;
    });
  }
  activeSection: string | null = null;
  quantity: number = 1;

  increaseQty(item: any): void {
    item.quantity++;
    this.cartService.updateItem(item).subscribe((res: any) => {
      this.updateCart();
    });
  }

  decreaseQty(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateItem(item).subscribe((res: any) => {
        this.updateCart();
      });
    }
  }

  isOpen: boolean;
  toggleSection(section: string) {
    if (this.activeSection === section) {
      // Close the section if it's already open
      this.activeSection = null;
      this.isOpen = false;
    } else {
      // Open the clicked section
      this.isOpen = true;
      this.activeSection = section;
    }
  }


  inputValue: string = '';
  user: Identity = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    profilePicture: new Image,
    about: '',
    age: 0,
    phoneNumber: '',
    address: new Address,
    permissions: undefined,
    shippingAddress: new Address,
    quizId: 0,
    orderId: 0,
    id: 0,
    isEmailSubscribed: false,
    isoutcCreatedDate: ''
  };

  async ngOnInit() {
    if (this.accountService.getToken()) {
      this.accountService.getUserInfo().subscribe();
    }
    this.accountService.auth.subscribe((res: AuthenticationInfo) => {
      if (res?.identity != null) {
        this.user = res?.identity;
      }
    });

    this.getDefaultPaymentMethod();
  }

  async showCard() {
    this.showCardInput = true;

    // Wait for Angular to update the DOM
    setTimeout(async () => {
      Stripe = await loadStripe('pk_test_51OKudgHBiPwJgahsQu1sSsFrRuqF0SZjVjdaA9yC95MprKlXd2wjZs7q0a7c3JSyjT75zyoIZWzzCSLX53wKflo500nBm6EFJp');

      if (Stripe) {
        this.elements = Stripe.elements();
        if (this.elements) {
          this.cardElement = this.elements.create('card', { style: this.getCardStyle() });
          this.cardElement.mount('#card-element'); // Now the element exists
        }
      }
    }, 0); // Allow Angular to render before executing mount()
  }

  paymentMethod: any = {};
  showCardInput: boolean;
  getDefaultPaymentMethod() {
    return this.paymentService.getDefaultPaymentMethod().subscribe((res: any) => {
      this.paymentMethod = res;
    });
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

  isProcessing = false;
  async handlePayment() {
    this.isProcessing = true;
    console.log(this.cart);
    var paymentMethodUsed = this.paymentMethod.stripeMethodId;
    if (this.showCardInput) {
      if (Stripe && this.cardElement) {
    

        if (Stripe && this.cardElement) {
          const { paymentMethod, error } = await Stripe.createPaymentMethod({
            type: 'card',
            card: this.cardElement,
          });

          paymentMethodUsed = paymentMethod.id;
        }
      }
    }
    await this.paymentService.createCheckoutPayment(this.cart.id, paymentMethodUsed, this.user).subscribe(
      res => {
        this.router.navigate(['/checkout-completed']).then(() => {
          localStorage.removeItem("cartId");
       
          this.snackBar.open("Order placed!", "dismiss", {
            panelClass: "success",
            politeness: "polite",
            duration: 4000,
            horizontalPosition: 'right'
          });
        });
      },
      error => {
        // Handle API error here
        console.error("API error:", error);
        this.isProcessing = false;

      }
    );
  }
}
