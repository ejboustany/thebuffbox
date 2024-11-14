import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-fitness-goal-step3',
  templateUrl: './onboarding-fitness-goal-step3.component.html',
  styleUrls: ['./onboarding-fitness-goal-step3.component.css']
})
export class OnboardingFitnessGoalStep3Component {
  constructor(private typesServeice: TypesService) { }
  @Input() quiz: any;
  fitnessGoals: any;
  @Input() progress: string = "7%";

  ngOnInit(): void {
    this.getFitnessGoals();
  }

  onChange(usedProteinBefore: boolean){
    this.quiz.usedProteinBefore = usedProteinBefore;
  }

  getFitnessGoals() {
    return this.typesServeice.fitnessGoals().subscribe((res: any) => {
      this.fitnessGoals = res;
    });
  }
}
