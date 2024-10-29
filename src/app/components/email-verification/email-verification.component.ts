import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.css'
})



export class EmailVerificationComponent {
  code: string = "";
  userId: string = "";
  verificationSuccessfull: boolean = false;
  loaded: boolean = false;
  constructor(private route: ActivatedRoute, private accountService: AccountService) {
    this.route.params.subscribe(params => {
      this.code = params['code'];
      this.userId = params['userId'];
    });

    this.verifyUserEmail();
  }

  verifyUserEmail() {
    this.accountService.verifyUserEmail(this.code, this.userId).subscribe(res => {
      this.verificationSuccessfull = true;
      this.loaded = true;
    },
    error => {
      this.verificationSuccessfull = false;
      this.loaded = true;
    });

  }
}
