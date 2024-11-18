import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Identity } from 'src/app/models/identity.model';
import { Quiz } from 'src/app/models/quiz.model';
import { AccountService } from 'src/app/services/account.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-onboard-client',
  templateUrl: './onboard-client.component.html',
  styleUrls: ['./onboard-client.component.css']
})
export class OnboardClientComponent {
  currentStep = 1;
  code: string = "";
  userId: string = "";
  verificationSuccessfull: boolean = false;
  loaded: boolean = false;
  quiz: Quiz = {
    exerciseTypes: [],
    exerciseFrequency: null,
    id: 0,
    isoutcCreatedDate: "",
    fitnessGoals: [],
    lifestylePerformanceGoals: [],
    dietaryPreferences: [],
    dislikedBrands: [],
    dietaryRestrictions: [],
    brandUsages: [],
    proteinMixes: [],
    flavors: [],
    textures: [],
    usedProteinBefore: null,
    profileInfo: new Identity(),
    orderId: 0,
    password: "",
    confirmPassword: ""
  };

  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService, private quizService: QuizService) {
    this.route.params.subscribe(params => {
      this.currentStep = +params['step'] || 1;
    });
  }

  nextStep() {
    console.log(this.quiz);
    return this.quizService.submitQuiz(this.quiz, this.currentStep == 12).subscribe((res: any) => {
      this.quiz.id = res.id;
      this.quiz.profileInfo = res.profileInfo;
      if (this.currentStep < 13) {
        this.currentStep++;
        this.navigateToStep(this.currentStep);
      } else if (this.currentStep == 13) {
        this.router.navigate(['/checkout/' + this.quiz.orderId]);
      }
    });
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.navigateToStep(this.currentStep);
    }
  }

  private navigateToStep(step: number) {
    this.router.navigate(['/take-quiz', step]);
  }
}
