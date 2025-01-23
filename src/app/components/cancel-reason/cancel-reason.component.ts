import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-cancel-reason',
  templateUrl: './cancel-reason.component.html',
  styleUrl: './cancel-reason.component.css'
})
export class CancelReasonComponent {

  submit() {
    return this.accountService.cancelMembership(this.selectedReason.id)
      .subscribe(
        res => {
          this.router.navigate(["profile"]);
        },
        error => {
          // Handle API error here
          console.error("API error:", error);
          // Set loadingPayment to false in case of error
        }
      );
  }

  reasons = [
    { id: 0, label: 'Not Enough Brands/Flavors' },
    { id: 1, label: 'Found Cheaper Prices' },
    { id: 2, label: 'Bad Experience' },
    { id: 3, label: 'No Longer Needed' }
  ];

  selectedReason: any = { id: null }// Stores the selected value

  deliveryDuration: number = 0;
  user: Identity;

  constructor(private accountService: AccountService, private snackBar: MatSnackBar, private router: Router) {

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
