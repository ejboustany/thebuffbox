import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-onboarding-results-step13',
  templateUrl: './onboarding-results-step13.component.html',
  styleUrl: './onboarding-results-step13.component.css'
})
export class OnboardingResultsStep13Component implements OnInit {
  @Input() quiz: any;
  products: any;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProductsFromQuestionaire();
  }

  getProductsFromQuestionaire() {
    return this.productService.getProductQuizResults(this.quiz).subscribe((res: any) => {
      this.products = res.products;
      this.quiz.orderId = res.orderId;
    });
  }
}
