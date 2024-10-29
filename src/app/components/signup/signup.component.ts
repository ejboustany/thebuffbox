import { Component, NgZone, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { SeoService } from 'src/app/services/canonical.service';
import { Seo } from 'src/app/models/seo.model';

// import * as google from 'google-one-tap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  isLoading = false;
  constructor(private accountService: AccountService, private router: Router,
    private snackBar: MatSnackBar, private _ngZone: NgZone, private seo: SeoService) { 

    }

  ngOnInit(): void {
    this.updateSeo();

    this.signupForm = new FormGroup({
      emailInput: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordInput: new FormControl('', [
        Validators.required
      ])
    });
  }

  user: any = {};
  registering: Subscription;
  registered: boolean

  register() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      var pass = new String(this.user?.Password);
      if (this.user?.Username != null && this.hasWhiteSpace(this.user?.Username)) {
        this.snackBar.open("Username should contain no spacing!", "dismiss", {
          panelClass: "error",
          politeness: "polite",
          duration: 4000,
          horizontalPosition: 'right'
        });
        this.isLoading = false;
      } else if (this.user?.Password != null && pass.length < 6) {
        this.snackBar.open("Password must be more than 6 characters!", "dismiss", {
          panelClass: "error",
          politeness: "polite",
          duration: 4000,
          horizontalPosition: 'right'
        });
        this.isLoading = false;
      } else {
        this.registering = this.accountService.register(this.user, "").subscribe(
          res => {
            // this.router.navigate(["login"]);
            this.snackBar.open("Thank you, keep an eye on your inbox for a verification link!", "dismiss", {
              panelClass: "success",
              politeness: "polite",
              duration: 4000,
              horizontalPosition: 'right'
            });
            this.isLoading = false;
            this.registered = true;
          },
          error => {
            // Handle error here
            // Stop the loader spinner
            this.isLoading = false;
          }
        );
      }
    }
    else {
      this.signupForm.markAllAsTouched();
      return;
    }
  }

  hasWhiteSpace(s: string) {
    return s.indexOf(' ') >= 0;
  }

  signIn() {
    this.router.navigate(["login"]).then(() => {
      window.location.reload();
    });
  }

  private updateSeo(): void {
    this.seo.updateSeo(new Seo("Register - TheBuffBox",
      "Create a TheBuffBox account.",
      "",
      "",
      new Array<string>("TheBuffBox, Register, Signup")));
  }
}
