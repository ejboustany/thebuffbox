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

currentSlide = 0;
  slideInterval: any;
  touchStartX = 0;
  touchEndX = 0;

  ngOnInit(): void {
    //this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % 2;
    }, 5000); // change every 5 seconds
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    const threshold = 50; // pixels to count as a swipe

    if (swipeDistance > threshold) {
      // Swipe right
      this.currentSlide = this.currentSlide === 0 ? 1 : 0;
    } else if (swipeDistance < -threshold) {
      // Swipe left
      this.currentSlide = this.currentSlide === 1 ? 0 : 1;
    }
  }
}
