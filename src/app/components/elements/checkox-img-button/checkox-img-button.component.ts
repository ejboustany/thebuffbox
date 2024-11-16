import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkox-img-button',
  templateUrl: './checkox-img-button.component.html',
  styleUrl: './checkox-img-button.component.css'
})
export class CheckoxImgButtonComponent {
  @Input() enumValues: { displayName: string; value: any; img: string; isChecked: boolean }[];
  @Input() selectedValues: any[] = []; // Bind selected values as an array
  @Input() prevLikedValues: any[] = [];
  
  onChange(value: any) {
    value.isChecked = !value.isChecked ?? false;
    if (value.isChecked && !this.selectedValues.includes(value.id)) {
      if (!this.selectedValues) {
        this.selectedValues = [];
      }
  
      // Ensure value.id is not already in selectedValues
      if (!this.selectedValues.includes(value.id)) {
        this.selectedValues.push(value.id); // Add if checked and not already present
      }
    } else {
      const index = this.selectedValues.indexOf(value.id);
      if (index > -1) {
        this.selectedValues.splice(index, 1); // Remove if unchecked
      }
    }
  }
  

  isChecked(enumValue: any): boolean {
    return this.selectedValues.includes(enumValue.id);
  }


  isLiked(enumValue: any): boolean {
    return this.prevLikedValues.includes(enumValue.id);
  }
}
