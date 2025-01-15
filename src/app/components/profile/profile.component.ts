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
  isDisabled = true;
  originalUser: Identity;

  constructor(private accountService: AccountService, private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    if (this.accountService.getToken()) {
      this.accountService.getUserInfo().subscribe();
    }
    this.accountService.auth.subscribe((res: AuthenticationInfo) => {
      if(res?.identity != null){
        this.user = res?.identity;
        this.originalUser = { ... this.user };
        if(this.user.profilePicture == null){
        }
      }
    });
  }

  onFieldChange() {
      this.isDisabled = false; // Keep the button disabled if no fields have changed
  }

  save(){
    return this.accountService.save(this.user).subscribe((res: any) => {
      this.snackBar.open("Profile updated!", "dismiss", {
        panelClass: "success",
        politeness: "polite",
        duration: 4000,
        horizontalPosition: 'right'
      });
    });
  }
}
