import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-tracker',
  templateUrl: './delivery-tracker.component.html',
  styleUrl: './delivery-tracker.component.css'
})
export class DeliveryTrackerComponent {
  @Input() selectedDay: number = 0; // Default selected day

  selectDay(day: number): void {
    this.selectedDay = day;
  }
}
