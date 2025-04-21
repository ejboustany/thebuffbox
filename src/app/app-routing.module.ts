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
import { CartCheckoutConfirmationComponent } from './components/cart-checkout-confirmation/cart-checkout-confirmation.component';
import { UnsubscribeComponent } from './components/unsubscribe/unsubscribe.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { PartnerApplicationComponent } from './components/partner-application/partner-application.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'take-quiz/:step', component: QuizComponent },
  { path: 'take-quiz/:step/:quizId', component: QuizComponent },
  { path: 'result/:quizId', component: OnboardingResultsStep13Component, canActivate: [AuthGuard] },
  { path: 'subscribe/:orderId', component: ChoosePlanStep14Component, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  { path: 'checkout/:orderId', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'cart-checkout', component: CartCheckoutComponent, canActivate: [AuthGuard] },
  { path: 'verification/:code/:userId', component: EmailVerificationComponent },
  { path: 'thank-you/:orderId', component: ThankyouComponent, canActivate: [AuthGuard] },
  { path: 'subscriptions-learn-more', component: SubscriptionsLearnMoreComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'membership', component: MembershipComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  { path: 'billing', component: BillingComponent, canActivate: [AuthGuard] },
  { path: 'cancel', component: CancelMembershipComponent },
  { path: 'frequency', component: AdjustFrequencyComponent },
  { path: 'cancel-reason', component: CancelReasonComponent },
  { path: 'product-detail/:productId', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'build-your-box/:orderId', component: BuildYourBoxComponent, canActivate: [AuthGuard] },
  { path: 'choose-samples/:orderId', component: ChooseSamplesComponent, canActivate: [AuthGuard] },
  { path: 'sample-detail/:orderId/:productId', component: SampleDetailComponent, canActivate: [AuthGuard] },
  { path: 'checkout-completed', component: CartCheckoutConfirmationComponent, canActivate: [AuthGuard] },
  { path: 'unsubscribe/:token', component: UnsubscribeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'influencer', component: PartnerApplicationComponent },
  { path: 'order-detail/:orderId', component: OrderDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
