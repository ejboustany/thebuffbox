import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, NgZone } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';
import { OrderService } from 'src/app/services/order.service';
import { ReviewItemComponent } from '../review-item/review-item.component';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent {
  user: Identity;
  subscription: any;
  order: any;
  constructor(private accountService: AccountService, private orderService: OrderService, private _ngZone: NgZone, private router: Router, private dialog: MatDialog) {

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

  public logout(){
    this.accountService.logout();
    this._ngZone.run(() => {
      this.router.navigate(['/']).then(() => window.location.reload());
    })
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
