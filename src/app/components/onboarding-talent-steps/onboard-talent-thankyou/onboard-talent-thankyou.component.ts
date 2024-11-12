import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-onboard-talent-thankyou',
  templateUrl: './onboard-talent-thankyou.component.html',
  styleUrls: ['./onboard-talent-thankyou.component.css']
})
export class OnboardTalentThankyouComponent {
  orderId: number;
  order: any = {};

  constructor(private route: ActivatedRoute, 
    private orderService: OrderService, private router: Router) {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    });
    this.gettOrder(this.orderId);
  }
  

  gettOrder(orderId: number) {
    return this.orderService.getById(orderId).subscribe((res: any) => {
      this.order = res.item;
    });
  }
}
