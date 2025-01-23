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
  order: any = { identity: { shippingAddress:{} } };
  deliveryDuration: number = 0;

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
    console.log(this.deliveryDuration);
    if (Stripe && this.cardElement) {
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
      }
    );
    } else {
      alert('Stripe not initialized correctly.');
    }
  }
}
