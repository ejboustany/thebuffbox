import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe, StripeElements, StripeCardElement, StripeCardNumberElement, StripeCardExpiryElement } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private http: HttpClient, private paymentService: PaymentService, private route: ActivatedRoute, 
    private orderService: OrderService, private router: Router) {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    });
    this.getCheckoutOrder(this.orderId);
  }

  getCheckoutOrder(orderId: number) {
    return this.orderService.getCheckoutOrder(orderId).subscribe((res: any) => {
      this.order = res;

      if (this.order.paymentStatus == null || this.order.paymentStatus == 3) {
        this.createStripePayment();
      }
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

  }

  loadingPayment = false;
  createStripePayment() {
    this.loadingPayment = true;

    this.paymentService.createPaymentIntent(this.orderId).subscribe(
      res => {
        this.clientSecret = res.clientSecret;
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

      if (error) {
        const errorMessage = document.getElementById('card-errors')!;
        errorMessage.classList.remove('hidden');
      } else if (paymentIntent?.status === 'succeeded') {
        // Send payment status to backend for verification
        console.log(this.order.identity);
        this.paymentService.verifyPayment(paymentIntent.id, this.order.identity).subscribe(
          res => {
            this.router.navigate(["thank-you/" + this.order.id])
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
