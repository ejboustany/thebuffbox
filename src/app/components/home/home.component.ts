import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  message: string = '';

  sendEmail() {
    const subject = encodeURIComponent('Subject Here'); // Optional: you can add a subject.
    const body = encodeURIComponent(this.message);
    const mailtoLink = `mailto:${this.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  }
}
