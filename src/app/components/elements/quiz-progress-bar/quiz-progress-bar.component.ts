import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-progress-bar',
  templateUrl: './quiz-progress-bar.component.html',
  styleUrl: './quiz-progress-bar.component.css'
})
export class QuizProgressBarComponent {
  @Input() progress: string = "7%";
}
