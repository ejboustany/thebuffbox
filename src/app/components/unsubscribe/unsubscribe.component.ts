import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent {
  token: string = "";
  unsubscribeSuccessful: boolean = false;
  loaded: boolean = false;
  errorMessage: string = "";

  constructor(
    private route: ActivatedRoute, 
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.token = params['token'] || '';
      if (this.token) {
        this.verifyUnsubscribe();
      } else {
        this.loaded = true;
        this.errorMessage = "Invalid unsubscribe link. Token is missing.";
      }
    });
  }

  verifyUnsubscribe() {
    this.accountService.unsubscribeUserEmail(this.token).subscribe({
      next: () => {
        this.unsubscribeSuccessful = true;
        this.loaded = true;
      },
      error: () => {
        this.unsubscribeSuccessful = false;
        this.loaded = true;
        this.errorMessage = "Unable to process your unsubscribe request. The link may have expired.";
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
