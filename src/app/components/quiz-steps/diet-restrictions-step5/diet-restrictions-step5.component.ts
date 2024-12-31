import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-diet-restrictions-step5',
  templateUrl: './diet-restrictions-step5.component.html',
  styleUrls: ['./diet-restrictions-step5.component.css']
})
export class OnboardingDietRestrictionsStep5Component implements OnInit {
  @Input() quiz: any;
  products: any;
  @Input() progress: string = "7%";
  dietaryRestrictions:any;
  constructor(private typesService: TypesService){

  }

  ngOnInit(): void {
    this.getRestrictions();
  }
 
  // getProductsFromQuestionaire(){
  //   return this.productService.getProductQuizResults(this.quiz).subscribe((res: any) => {
  //     this.products = res.products;
  //     this.quiz.orderId = res.orderId;
  //   });
  // }

  getRestrictions() {
    return this.typesService.restrictions().subscribe((res: any) => {
      this.dietaryRestrictions = res;
    });
  }

}
