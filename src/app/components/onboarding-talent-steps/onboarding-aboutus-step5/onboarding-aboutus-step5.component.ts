import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-onboarding-aboutus-step5',
  templateUrl: './onboarding-aboutus-step5.component.html',
  styleUrls: ['./onboarding-aboutus-step5.component.css']
})
export class OnboardingAboutusStep5Component implements OnInit {
  @Input() quiz: any;
  products: any;
  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.getProductsFromQuestionaire();
  }
 


  getProductsFromQuestionaire(){
    return this.productService.getProductQuizResults(this.quiz).subscribe((res: any) => {
      this.products = res;
    });
  }

}
