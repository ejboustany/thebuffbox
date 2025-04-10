import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
email: string = '';
  showMessage: boolean;
  contact: any = {};

  constructor(private accountService: AccountService) {

  }

  isOpen: { [key: number]: boolean } = {
    1: false,
    2: false,
    3: false
  };

  toggleAnswer(questionId: number): void {
    this.isOpen[questionId] = !this.isOpen[questionId];
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
