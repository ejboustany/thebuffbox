import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SignInComponent } from './components/signin/signin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { ThankyouComponent } from './components/quiz-steps/thankyou/thankyou.component';
import { OnboardingDietRestrictionsStep5Component } from './components/quiz-steps/diet-restrictions-step5/diet-restrictions-step5.component';
import { OnboardingExerciseStep1Component } from './components/quiz-steps/exercise-step1/exercise-step1.component';
import { OnboardingExerciseFreqStep2Component } from './components/quiz-steps/exercise-freq-step2/exercise-freq-step2.component';
import { OnboardingFitnessGoalStep3Component } from './components/quiz-steps/fitness-goal-step3/fitness-goal-step3.component';
import { OnboardingFollowDietStep4Component } from './components/quiz-steps/follow-diet-step4/follow-diet-step4.component';
import { RadioButtonComponent } from './components/elements/radio-button/radio-button.component';
import { CheckboxButtonComponent } from './components/elements/checkbox-button/checkbox-button.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { MatMenuModule } from '@angular/material/menu';
import { InsideMenuComponent } from './components/inside-menu/inside-menu.component';
import { OnboardingFlavorsStep6Component } from './components/quiz-steps/flavors-step6/flavors-step6.component';
import { OnboardingTexturesStep7Component } from "./components/quiz-steps/textures-step7/textures-step7.component";
import { OnboardingTriedProteinStep8Component } from './components/quiz-steps/tried-protein-step8/tried-protein-step8.component';
import { OnboardingProteinMixStep9Component } from './components/quiz-steps/protein-mix-step9/protein-mix-step9.component';
import { OnboardingBrandsStep10Component } from './components/quiz-steps/brands-step10/brands-step10.component';
import { OnboardingBrandsDislikeStep11Component } from './components/quiz-steps/brands-dislike-step11/brands-dislike-step11.component';
import { OnboardingRegisterStep12Component } from './components/quiz-steps/register-step12/register-step12.component';
import { OnboardingResultsStep13Component } from './components/quiz-steps/results-step13/results-step13.component';
import { CheckoxImgButtonComponent } from './components/elements/checkox-img-button/checkox-img-button.component';
import { LastCharactersPipe } from './pipes/take-characters.pipe';
import { QuizProgressBarComponent } from './components/elements/quiz-progress-bar/quiz-progress-bar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ChoosePlanStep14Component } from './components/quiz-steps/choose-plan-step14/choose-plan-step14.component';
import { SubscriptionsLearnMoreComponent } from './components/subscriptions-learn-more/subscriptions-learn-more.component';
import { DeliveryTrackerComponent } from './components/elements/delivery-tracker/delivery-tracker.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    AppMenuComponent,
    OnboardingDietRestrictionsStep5Component,
    OnboardingExerciseStep1Component,
    OnboardingFitnessGoalStep3Component,
    OnboardingFollowDietStep4Component,
    RadioButtonComponent,
    CheckboxButtonComponent,
    CheckoxImgButtonComponent,
    CheckoutComponent,
    EmailVerificationComponent,
    InsideMenuComponent,
    OnboardingExerciseFreqStep2Component,
    OnboardingFlavorsStep6Component,
    OnboardingTexturesStep7Component,
    OnboardingTriedProteinStep8Component,
    OnboardingProteinMixStep9Component,
    OnboardingBrandsStep10Component,
    OnboardingBrandsDislikeStep11Component,
    OnboardingRegisterStep12Component,
    OnboardingResultsStep13Component,
    LastCharactersPipe,
    QuizProgressBarComponent,
    QuizComponent,
    ThankyouComponent,
    ChoosePlanStep14Component,
    SubscriptionsLearnMoreComponent,
    DeliveryTrackerComponent,
    ProfileComponent
  ],
  exports: [LastCharactersPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatMenuModule,
],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
