import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Identity } from 'src/app/models/identity.model';
import { Quiz } from 'src/app/models/quiz.model';
import { AccountService } from 'src/app/services/account.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  currentStep = 1;
  quizId= 0;
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
  referralCode: string = '';


  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService, private quizService: QuizService) {

    this.referralCode = '';
  
    this.route.queryParams.subscribe(queryParams => {
      this.referralCode = queryParams['referralCode'] || '';
    });
    
    this.route.params.subscribe(params => {
      this.currentStep = +params['step'] || 1;
      this.quizId = +params['quizId'];
      if(this.quizId){
        this.getQuizById(this.quizId)
      }
    });
  }

  getQuizById(quizId: number){
      return this.quizService.getById(quizId).subscribe((res: any) => {
        this.quiz = res.item;
      });
  }

  nextStep() {
    return this.quizService.submitQuiz(this.quiz, this.currentStep == 12, this.referralCode).subscribe((res: any) => {
      this.quiz.id = res.id;
      this.quiz.profileInfo = res.profileInfo;
      

      
      if(this.quizId && this.currentStep == 11){
        this.router.navigate(['/profile']);
        return;
      }
      
      if(this.currentStep == 12){
        this.router.navigate(['/result/' + this.quiz.id]);
        return;
      }
      
      if (this.currentStep < 14) {
        this.currentStep++;
        this.navigateToStep(this.currentStep);
      } else if (this.currentStep == 14) {
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
    const navigationExtras: NavigationExtras = {};
  
    if (this.referralCode) {
      navigationExtras.queryParams = { referralCode: this.referralCode };
    }
  
    
    if (this.quizId) {
      this.router.navigate(['/take-quiz', step, this.quizId]);
    }else{
      this.router.navigate(['/take-quiz', step], navigationExtras);
    }
  }
}
