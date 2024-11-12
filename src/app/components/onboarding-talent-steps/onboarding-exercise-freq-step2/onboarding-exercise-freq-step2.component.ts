import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-exercise-freq-step2',
  templateUrl: './onboarding-exercise-freq-step2.component.html',
  styleUrls: ['./onboarding-exercise-freq-step2.component.css']
})
export class OnboardingExerciseFreqStep2Component {
  dietaryPreferences : any;
  dietaryRestrictions:any;
  exerciseFrequencies: any;
  flavors:any;
  @Input() quiz: any;
  constructor(private typesServeice: TypesService) { }

  getFitnessGoals() {
    return this.typesServeice.dietaryPreferences().subscribe((res: any) => {
      this.dietaryPreferences = res;
    });
  }

  getRestrictions() {
    return this.typesServeice.restrictions().subscribe((res: any) => {
      this.dietaryRestrictions = res;
    });
  }

  getFlavors() {
    return this.typesServeice.flavors().subscribe((res: any) => {
      this.flavors = res;
    });
  }

  ngOnInit(): void {
    this.getExerciseFrequencies();
  }

  getExerciseFrequencies() {
    return this.typesServeice.exerciseFrequencies().subscribe((res: any) => {
      this.exerciseFrequencies = res;
    });
  }

  onExerciseFrequencyChange(selectedId: number) {
    this.quiz.exerciseFrequency = selectedId;
  }
}
