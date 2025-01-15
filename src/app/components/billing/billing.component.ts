import { Component } from '@angular/core';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {
  user: Identity;
  paymentInfo: any;

  constructor(private accountService: AccountService) {

  }
  ngOnInit(): void {
    if (this.accountService.getToken()) {
      this.accountService.getUserInfo().subscribe();
    }
    this.accountService.auth.subscribe((res: AuthenticationInfo) => {
      if(res?.identity != null){
        this.user = res?.identity;
        if(this.user.profilePicture == null){
        }

        this.getPaymentInfo(res.identity.id);
      }
    });
  }

  getPaymentInfo(identityId: number) {
    return this.accountService.getBillingInfoByIdentityId(identityId).subscribe((res: any) => {
      this.paymentInfo = res;
    });
  }

}
