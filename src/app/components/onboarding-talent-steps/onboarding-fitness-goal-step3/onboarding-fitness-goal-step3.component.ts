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
  proteinMixes: any;
  proteinBrands: any;
  fitnessGoals: any;
  ngOnInit(): void {
    this.getFitnessGoals();
  }

  getProteinMixes() {
    return this.typesServeice.proteinMixes().subscribe((res: any) => {
      this.proteinMixes = res;
    });
  }

  getProteinBrands() {
    return this.typesServeice.proteinBrands().subscribe((res: any) => {
      this.proteinBrands = res;
    });
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
