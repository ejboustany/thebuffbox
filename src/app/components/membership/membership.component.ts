import { Component } from '@angular/core';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent {
  user: Identity;
  subscription: any;
  order: any;
  constructor(private accountService: AccountService, private orderService: OrderService) {

  }
  ngOnInit(): void {
    if (this.accountService.getToken()) {
      this.accountService.getUserInfo().subscribe();
    }
    this.accountService.auth.subscribe((res: AuthenticationInfo) => {
      if (res?.identity != null) {
        this.user = res?.identity;
        this.subscription = res?.subscription;
        this.getOrder(this.subscription.currentOrderId);
      }
    });
  }

  getOrder(orderId: number) {
    return this.orderService.getById(orderId).subscribe((res: any) => {
      this.order = res.item;
    });
  }
}
