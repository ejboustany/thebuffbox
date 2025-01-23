import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delivery-tracker',
  templateUrl: './delivery-tracker.component.html',
  styleUrl: './delivery-tracker.component.css'
})
export class DeliveryTrackerComponent {
  @Input() selectedDay: number = 0; // Receives initial value from parent
  @Output() selectedDayChange = new EventEmitter<number>(); // Event to notify parent

  selectDay(day: number): void {
    this.selectedDay = day;
    this.selectedDayChange.emit(day); // Notify parent of change
  }
}
