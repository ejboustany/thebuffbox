import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription-tracker',
  templateUrl: './subscription-tracker.component.html',
  styleUrl: './subscription-tracker.component.css'
})
export class SubscriptionTrackerComponent {
  selectedDay: number = 1; // Default selected day

  selectDay(day: number): void {
    this.selectedDay = day;
  }
}
