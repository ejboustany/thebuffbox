import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subscription-tracker',
  templateUrl: './subscription-tracker.component.html',
  styleUrl: './subscription-tracker.component.css'
})
export class SubscriptionTrackerComponent {
  @Input() billingDate: any; 
  @Input() buildYourBoxDate: any; 
  @Input() assemblyDate: any; 
  @Input() shippingDate: any; 
  @Input() reviewDate: any; 
  @Input() pickTubDate: any; 
  @Input() orderId: number;

   @Input() selectedDay: number = 0; // Receives initial value from parent
   @Output() selectedDayChange = new EventEmitter<number>(); // Event to notify parent
 
   selectDay(day: number): void {
     this.selectedDay = day;
     this.selectedDayChange.emit(day); // Notify parent of change


   }

   getAdjustedDate(assemblyDate: string | Date | null): string {
    if (!assemblyDate) return 'TBD';
    
    const date = new Date(assemblyDate);
    date.setDate(date.getDate() + 5);
  
    return date.toISOString();
  }
}
