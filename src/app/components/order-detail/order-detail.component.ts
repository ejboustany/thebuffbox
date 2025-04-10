import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent {
  order: any = {};
  orderId: number;

  constructor(private http: HttpClient, private paymentService: PaymentService, private route: ActivatedRoute, 
    private orderService: OrderService, private router: Router) {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    });
    this.getOrder(this.orderId);
  }

  getOrder(orderId: number) {
    return this.orderService.getById(orderId).subscribe((res: any) => {
      this.order = res.item;
    });
  }
}
