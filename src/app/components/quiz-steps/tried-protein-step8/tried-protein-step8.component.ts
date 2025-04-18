import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tried-protein-step8',
  templateUrl: './tried-protein-step8.component.html',
  styleUrl: './tried-protein-step8.component.css'
})
export class OnboardingTriedProteinStep8Component implements OnInit {
  @Input() quiz: any;
  options: any = [{ id: 1, displayName: "Yes" }, { id: 0, displayName: "No" }];
  @Input() progress: string = "7%";
  selectedValue: any;
  constructor() {

  }
  ngOnInit(): void {
    if (this.quiz?.usedProteinBefore) {
      this.selectedValue = this.options[0].id;
    } else if (!this.quiz?.usedProteinBefore && this.quiz?.usedProteinBefore != null) {
      this.selectedValue = this.options[1].id;
    }
  }

  onExerciseFrequencyChange(selectedId: number) {
    if (selectedId == 0) {
      this.quiz.usedProteinBefore = false;
    } else {
      this.quiz.usedProteinBefore = true;
    }

  }
}
