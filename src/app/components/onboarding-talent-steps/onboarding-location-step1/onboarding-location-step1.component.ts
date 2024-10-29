import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-location-step1',
  templateUrl: './onboarding-location-step1.component.html',
  styleUrls: ['./onboarding-location-step1.component.css']
})
export class OnboardingLocaionStep1Component {
  @Input() quiz: any;
  execiseTypes: any;
  exerciseFrequencies: any;
  fitnessGoals: any;
  lifestylePerformanceGoals:any;
  constructor(private typesServeice: TypesService) { }
  ngOnInit(): void {

    this.getExerciseTypes();
    this.getExerciseFrequencies();
    this.getFitnessGoals();
    this.getLifestylePerformanceGoals();
  }


  getExerciseTypes() {
    console.log(this.quiz);
    return this.typesServeice.exerciseTypes().subscribe((res: any) => {
      this.execiseTypes = res;
    });


  }

  getExerciseFrequencies() {
    return this.typesServeice.exerciseFrequencies().subscribe((res: any) => {
      this.exerciseFrequencies = res;
    });
  }

  getFitnessGoals() {
    return this.typesServeice.fitnessGoals().subscribe((res: any) => {
      this.fitnessGoals = res;
    });
  }

  getLifestylePerformanceGoals() {
    return this.typesServeice.lifestylePerformanceGoals().subscribe((res: any) => {
      this.lifestylePerformanceGoals = res;
    });
  }

  onExerciseFrequencyChange(selectedId: number) {
    this.quiz.exerciseFrequency = selectedId;
  }
}
