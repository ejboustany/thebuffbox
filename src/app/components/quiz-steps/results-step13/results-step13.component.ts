import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-results-step13',
  templateUrl: './results-step13.component.html',
  styleUrl: './results-step13.component.css'
})
export class OnboardingResultsStep13Component implements OnInit {
  @Input() quiz: any;
  @Input() progress: string = '7%';
  products: any;

  constructor(private productService: ProductService, private router: Router) {

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

  checkout(){
    this.router.navigate(['/checkout/' + this.quiz.orderId]);
  }
}
