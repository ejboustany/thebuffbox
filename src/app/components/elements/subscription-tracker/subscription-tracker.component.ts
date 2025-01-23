import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subscription-tracker',
  templateUrl: './subscription-tracker.component.html',
  styleUrl: './subscription-tracker.component.css'
})
export class SubscriptionTrackerComponent {
   @Input() selectedDay: number = 0; // Receives initial value from parent
   @Output() selectedDayChange = new EventEmitter<number>(); // Event to notify parent
 
   selectDay(day: number): void {
     this.selectedDay = day;
     this.selectedDayChange.emit(day); // Notify parent of change


   }
}
