import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-step12',
  templateUrl: './register-step12.component.html',
  styleUrl: './register-step12.component.css'
})
export class OnboardingRegisterStep12Component implements OnInit {
  ageRange: number[] = Array.from({ length: 100 }, (_, i) => i + 1); // Ages 1 to 100
  @Input() quiz: any;
  @Input() progress: string = "7%";
  
  ngOnInit(): void {
    this.quiz.profileInfo.age = 0; // or "" if you prefer
  }

}
