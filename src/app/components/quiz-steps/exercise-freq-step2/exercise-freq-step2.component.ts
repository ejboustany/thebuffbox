import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-exercise-freq-step2',
  templateUrl: './exercise-freq-step2.component.html',
  styleUrls: ['./exercise-freq-step2.component.css']
})
export class OnboardingExerciseFreqStep2Component {
  exerciseFrequencies: any;
  @Input() progress: string = "7%";
  @Input() quiz: any;
  constructor(private typesServeice: TypesService) { }

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
