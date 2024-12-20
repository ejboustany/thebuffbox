import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { OnboardClientComponent } from './components/onboard-client/onboard-client.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { OnboardTalentThankyouComponent } from './components/onboarding-talent-steps/onboard-talent-thankyou/onboard-talent-thankyou.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'take-quiz/:step', component: OnboardClientComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/:orderId', component: CheckoutComponent },
  { path: 'verification/:code/:userId', component: EmailVerificationComponent },
  { path: 'thank-you/:orderId', component: OnboardTalentThankyouComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
