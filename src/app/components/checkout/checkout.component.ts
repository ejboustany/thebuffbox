import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe, StripeElements, StripeCardElement, StripeCardNumberElement, StripeCardExpiryElement } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/services/payment.service';
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

  constructor(private http: HttpClient, private paymentService: PaymentService) {}

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
    this.createStripePayment(100);
  }

  loadingPayment = false;
  createStripePayment(credits: number) {
    this.loadingPayment = true;
  
    this.paymentService.createPaymentIntent().subscribe(
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
          billing_details: { name: 'Customer Name' },
        },
      });

      console.log(paymentIntent);
      if (error) {
        const errorMessage = document.getElementById('card-errors')!;

        errorMessage.classList.remove('hidden');
      } else if (paymentIntent?.status === 'succeeded') {
        alert('Payment succeeded!');
      }
    } else {
      alert('Stripe not initialized correctly.');
    }
  }
}
