import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-button',
  templateUrl: './checkbox-button.component.html',
  styleUrl: './checkbox-button.component.css'
})
export class CheckboxButtonComponent {
  @Input() enumValues: { displayName: string; value: any; img: string; isChecked: boolean }[];
  @Input() selectedValues: any[] = []; // Bind selected values as an array
  @Input() maxSelection: any;

  onChange(value: any) {
    console.log(value);

    value.isChecked = !value.isChecked ?? false;
    if (value.isChecked && !this.selectedValues.includes(value.id)) {
      if (!this.selectedValues) {
        this.selectedValues = [];
      }
  
      // Ensure value.id is not already in selectedValues
      if (!this.selectedValues.includes(value.id) && this.selectedValues.length != this.maxSelection) {

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
}
