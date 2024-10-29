import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
})
export class RadioButtonComponent {
  @Input() enumValues: { displayName: string; value: any; id: number }[];
  @Input() selectedValue: any;
  @Input() name: string;

  @Output() valueChange = new EventEmitter<number>(); // Emit changes

  onChange(selectedEnum: any) {
    this.selectedValue = selectedEnum.id;
    this.valueChange.emit(this.selectedValue); // Emit value to parent
  }
}
