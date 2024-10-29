import { Component, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Seo } from 'src/app/models/seo.model';
import { AccountService } from 'src/app/services/account.service';
import { SeoService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-singin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  signinForm: FormGroup;
  user: any = {};
  isLoading = false;

  constructor(
    private accountService: AccountService, private router: Router,
    private _ngZone: NgZone, private seo: SeoService
  ) { }


  ngOnInit(): void {

    this.updateSeo();

    this.signinForm = new FormGroup({
      emailInput: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordInput: new FormControl('', [
        Validators.required
      ])
    });

  }



  login() {
    if (this.signinForm.valid) {
      this.isLoading = true;
      this.accountService.login(this.user.EmailAddress, this.user.Password).subscribe(
        res => {
          this.isLoading = false;
          this.router.navigate(["apps"]).then(() => {
            window.location.reload();
          });
        },
        error => {
          this.isLoading = false;
        }
      );
    } else {
      this.signinForm.markAllAsTouched();
      return;
    }
  }

  signUp() {
    this.router.navigate(["register"]).then(() => {
      window.location.reload();
    });
  }

  private updateSeo(): void {
    this.seo.updateSeo(new Seo("Log in - TheBuffBox",
      "Login, generate a website and host it for free.",
      "",
      "",
      new Array<string>("TheBuffBox, Login, Signin")));
  }
}
