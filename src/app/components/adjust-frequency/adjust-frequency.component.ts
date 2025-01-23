import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-adjust-frequency',
  templateUrl: './adjust-frequency.component.html',
  styleUrl: './adjust-frequency.component.css'
})
export class AdjustFrequencyComponent {
  deliveryDuration: number = 0;
  user: Identity;

  constructor(private accountService: AccountService, private snackBar: MatSnackBar) {

  }

  save() {
    return this.accountService.updateDeliveryDuration(this.deliveryDuration).subscribe((res: any) => {
      this.snackBar.open("Delivery schedule updated!", "dismiss", {
        panelClass: "success",
        politeness: "polite",
        duration: 4000,
        horizontalPosition: 'right'
      });
    });
  }

  ngOnInit(): void {
    if (this.accountService.getToken()) {
      this.accountService.getUserInfo().subscribe();
    }
    this.accountService.auth.subscribe((res: AuthenticationInfo) => {
      if (res?.identity != null) {
        this.user = res?.identity;
        this.deliveryDuration = res?.subscription?.deliveryScheduleDuration;
      }
    });
  }
}
