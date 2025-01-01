import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: Identity;
  welcomeIdentityId = 0;
  emailType = 0;
  countries: any;
  constructor(private accountService: AccountService, private snackBar: MatSnackBar) {

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
      }
    });
  }
}
