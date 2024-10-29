import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Identity } from 'src/app/models/identity.model';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-onboarding-squad-step4',
  templateUrl: './onboarding-squad-step4.component.html',
  styleUrls: ['./onboarding-squad-step4.component.css']
})
export class OnboardingSquadStep4Component {
  @Input() quiz: any;
  ageRange: number[] = Array.from({ length: 100 }, (_, i) => i + 1); // Ages 1 to 100
  constructor() {
    console.log(this.quiz)
  }


}
