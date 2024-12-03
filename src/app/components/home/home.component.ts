import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  showMessage: boolean;
  contact: any = {};

  constructor(private accountService: AccountService) {

  }

  loading = false;
  contactMessage() {
    if (this.contact.Name != null && this.contact.Name != '' &&
      this.contact.Email != null && this.contact.Email != '' &&
      this.contact.Text != null && this.contact.Text != ''
    ) {
      this.loading = true;

      this.accountService.sendContact(this.contact).subscribe(
        res => {
          this.loading = false;
          this.contact = {};
          this.showMessage = true;
        },
        error => {
          // Handle API error here
          console.error("API error:", error);
          // Set loadingPayment to false in case of error
          this.loading = false;
          this.showMessage = false;
        }
      );
    }
  }
}
