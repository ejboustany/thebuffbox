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
import { OnboardingAboutusStep5Component } from './components/onboarding-talent-steps/onboarding-aboutus-step5/onboarding-aboutus-step5.component';
import { OnboardingLocaionStep1Component } from './components/onboarding-talent-steps/onboarding-location-step1/onboarding-location-step1.component';
import { OnboardingRoleStep2Component } from './components/onboarding-talent-steps/onboarding-role-step2/onboarding-role-step2.component';
import { OnboardingSkillsStep3Component } from './components/onboarding-talent-steps/onboarding-skills-step3/onboarding-skills-step3.component';
import { OnboardingSquadStep4Component } from './components/onboarding-talent-steps/onboarding-squad-step4/onboarding-squad-step4.component';
import { RadioButtonComponent } from './components/elements/radio-button/radio-button.component';
import { CheckboxButtonComponent } from './components/elements/checkbox-button/checkbox-button.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';

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
    OnboardingAboutusStep5Component,
    OnboardingLocaionStep1Component,
    OnboardingRoleStep2Component,
    OnboardingSkillsStep3Component,
    OnboardingSquadStep4Component,
    RadioButtonComponent,
    CheckboxButtonComponent,
    CheckoutComponent,
    EmailVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
