import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-build-your-box',
  templateUrl: './build-your-box.component.html',
  styleUrl: './build-your-box.component.css'
})
export class BuildYourBoxComponent {
  orderId: number;
  order: any;
constructor(private route: ActivatedRoute, 
    private orderService: OrderService, private router: Router) {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    });
    this.getOrderById(this.orderId);
  }

  getOrderById(orderId: number) {
    return this.orderService.getById(orderId).subscribe((res: any) => {
      this.order = res.item;
    });
  }
}
