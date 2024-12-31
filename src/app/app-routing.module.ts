import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { AuthGuard } from './guards/auth.guard';
import { QuizComponent } from './components/quiz/quiz.component';
import { ThankyouComponent } from './components/quiz-steps/thankyou/thankyou.component';
import { SubscriptionsLearnMoreComponent } from './components/subscriptions-learn-more/subscriptions-learn-more.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'take-quiz/:step', component: QuizComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/:orderId', component: CheckoutComponent },
  { path: 'verification/:code/:userId', component: EmailVerificationComponent },
  { path: 'thank-you/:orderId', component: ThankyouComponent, canActivate: [AuthGuard] },
  { path: 'subscriptions-learn-more', component: SubscriptionsLearnMoreComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
