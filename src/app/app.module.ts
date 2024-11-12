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
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { OnboardClientComponent } from './components/onboard-client/onboard-client.component';
import { OnboardTalentThankyouComponent } from './components/onboarding-talent-steps/onboard-talent-thankyou/onboard-talent-thankyou.component';
import { OnboardingDietRestrictionsStep5Component } from './components/onboarding-talent-steps/onboarding-diet-restrictions-step5/onboarding-diet-restrictions-step5.component';
import { OnboardingExerciseStep1Component } from './components/onboarding-talent-steps/onboarding-exercise-step1/onboarding-exercise-step1.component';
import { OnboardingExerciseFreqStep2Component } from './components/onboarding-talent-steps/onboarding-exercise-freq-step2/onboarding-exercise-freq-step2.component';
import { OnboardingFitnessGoalStep3Component } from './components/onboarding-talent-steps/onboarding-fitness-goal-step3/onboarding-fitness-goal-step3.component';
import { OnboardingFollowDietStep4Component } from './components/onboarding-talent-steps/onboarding-follow-diet-step4/onboarding-follow-diet-step4.component';
import { RadioButtonComponent } from './components/elements/radio-button/radio-button.component';
import { CheckboxButtonComponent } from './components/elements/checkbox-button/checkbox-button.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { MatMenuModule } from '@angular/material/menu';
import { InsideMenuComponent } from './components/inside-menu/inside-menu.component';
import { OnboardingFlavorsStep6Component } from './components/onboarding-talent-steps/onboarding-flavors-step6/onboarding-flavors-step6.component';
import { OnboardingTexturesStep7Component } from "./components/onboarding-talent-steps/onboarding-textures-step7/onboarding-textures-step7.component";
import { OnboardingTriedProteinStep8Component } from './components/onboarding-talent-steps/onboarding-tried-protein-step8/onboarding-tried-protein-step8.component';
import { OnboardingProteinMixStep9Component } from './components/onboarding-talent-steps/onboarding-protein-mix-step9/onboarding-protein-mix-step9.component';
import { OnboardingBrandsStep10Component } from './components/onboarding-talent-steps/onboarding-brands-step10/onboarding-brands-step10.component';
import { OnboardingBrandsDislikeStep11Component } from './components/onboarding-talent-steps/onboarding-brands-dislike-step11/onboarding-brands-dislike-step11.component';
import { OnboardingRegisterStep12Component } from './components/onboarding-talent-steps/onboarding-register-step12/onboarding-register-step12.component';
import { OnboardingResultsStep13Component } from './components/onboarding-talent-steps/onboarding-results-step13/onboarding-results-step13.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    AppMenuComponent,
    QuestionnaireComponent,
    OnboardClientComponent,
    OnboardTalentThankyouComponent,
    OnboardingDietRestrictionsStep5Component,
    OnboardingExerciseStep1Component,
    OnboardingFitnessGoalStep3Component,
    OnboardingFollowDietStep4Component,
    RadioButtonComponent,
    CheckboxButtonComponent,
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
    OnboardingResultsStep13Component
  ],
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
