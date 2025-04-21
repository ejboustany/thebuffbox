import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent implements OnInit {
  order: any = {};
  orderId: number;
  user: Identity;
  
  constructor(private http: HttpClient, private paymentService: PaymentService, private route: ActivatedRoute, 
    private orderService: OrderService, private router: Router, private accountService: AccountService) {
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

    ngOnInit(): void {
      if (this.accountService.getToken()) {
        this.accountService.getUserInfo().subscribe();
      }
      this.accountService.auth.subscribe((res: AuthenticationInfo) => {
        if(res?.identity != null){
          this.user = res?.identity;
        }
      });
    }
}
