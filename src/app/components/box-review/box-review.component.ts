import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';
import { OrderService } from 'src/app/services/order.service';
import { ReviewItemComponent } from '../review-item/review-item.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-box-review',
  templateUrl: './box-review.component.html',
  styleUrl: './box-review.component.css'
})
export class BoxReviewComponent {
  user: Identity;
  subscription: any;
  order: any;
  constructor(private accountService: AccountService, private orderService: OrderService, private _ngZone: NgZone, private router: Router, public dialog: MatDialog) {

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

  showItems: boolean;
  showOrderItems(){
    this.showItems = true;
  }

  openReviewPopup(product: any) {

  
      console.log(this.user);
      
      const dialogConfig = new MatDialogConfig();
      dialogConfig.scrollStrategy = new NoopScrollStrategy();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
  
      dialogConfig.data = product;
      const dialogRef = this.dialog.open(ReviewItemComponent, dialogConfig);
      
      dialogRef.afterClosed().subscribe(() => {
        // Mark popup as shown (optional - to prevent showing multiple times)
      });
    }
}
