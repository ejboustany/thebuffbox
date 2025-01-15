import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { AccountService } from 'src/app/services/account.service';
import { ProductService } from 'src/app/services/product.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-results-step13',
  templateUrl: './results-step13.component.html',
  styleUrl: './results-step13.component.css'
})
export class OnboardingResultsStep13Component implements OnInit {
  quizId: any;
  progress: string = '95%';
  products: any;
  quiz: any = {};
  constructor(private productService: ProductService, private router: Router,
    private accountService: AccountService, private quizSercice: QuizService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = +params['quizId'];
      if (this.quizId) {
        this.getQuizById(this.quizId)

      }
    });

  }

  getProductsFromQuestionaire() {
    return this.productService.getProductQuizResults(this.quiz).subscribe((res: any) => {
      this.products = res.products;
      this.quiz.orderId = res.orderId;

    });
  }

  checkout() {
    this.router.navigate(['/checkout/' + this.quiz.orderId]);
  }

  getQuizById(quizId: number) {
    return this.quizSercice.getById(quizId).subscribe((res: any) => {
      this.quiz = res.item;

      if (this.quiz.orderId == null || this.quiz.orderId == 0) {
        this, this.getProductsFromQuestionaire();
      } else {
        this.getProductsByQuiz(this.quiz.id);
      }
    });
  }

  getProductsByQuiz(quizId: number) {
    return this.productService.getProductByQuiz(quizId).subscribe((res: any) => {
      this.products = res;
    });
  }
}

