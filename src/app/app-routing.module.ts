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
import { OnboardingResultsStep13Component } from './components/quiz-steps/results-step13/results-step13.component';
import { ChoosePlanStep14Component } from './components/quiz-steps/choose-plan-step14/choose-plan-step14.component';
import { MembershipComponent } from './components/membership/membership.component';
import { ShopComponent } from './components/shop/shop.component';
import { BillingComponent } from './components/billing/billing.component';
import { CancelMembershipComponent } from './components/cancel-membership/cancel-membership.component';
import { AdjustFrequencyComponent } from './components/adjust-frequency/adjust-frequency.component';
import { CancelReasonComponent } from './components/cancel-reason/cancel-reason.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BuildYourBoxComponent } from './components/build-your-box/build-your-box.component';
import { ChooseSamplesComponent } from './components/choose-samples/choose-samples.component';
import { SampleDetailComponent } from './components/sample-detail/sample-detail.component';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'take-quiz/:step', component: QuizComponent },
  { path: 'take-quiz/:step/:quizId', component: QuizComponent },
  { path: 'result/:quizId', component: OnboardingResultsStep13Component, canActivate: [AuthGuard] },
  { path: 'subscribe/:orderId', component: ChoosePlanStep14Component, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/:orderId', component: CheckoutComponent },
  { path: 'cart-checkout', component: CartCheckoutComponent },
  { path: 'verification/:code/:userId', component: EmailVerificationComponent },
  { path: 'thank-you/:orderId', component: ThankyouComponent, canActivate: [AuthGuard] },
  { path: 'subscriptions-learn-more', component: SubscriptionsLearnMoreComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'cancel', component: CancelMembershipComponent },
  { path: 'frequency', component: AdjustFrequencyComponent },
  { path: 'cancel-reason', component: CancelReasonComponent },
  { path: 'product-detail/:productId', component: ProductDetailComponent },
  { path: 'build-your-box/:orderId', component: BuildYourBoxComponent },
  { path: 'choose-samples/:orderId', component: ChooseSamplesComponent },
  { path: 'sample-detail/:orderId/:productId', component: SampleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
