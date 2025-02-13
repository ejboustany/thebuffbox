import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-sample-detail',
  templateUrl: './sample-detail.component.html',
  styleUrl: './sample-detail.component.css'
})
export class SampleDetailComponent {
  product: any;
  productId: number;
  orderId: number;
  activeSection: string | null = null;


constructor(private route: ActivatedRoute, 
    private productService: ProductService, private router: Router, private sampleService: SampleService) {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
      this.productId = params['productId'];
    });



    this.getProductById(this.productId);
  }

  getProductById(productId: number) {
    return this.productService.getProductById(productId).subscribe((res: any) => {
      this.product = res.item;
    });
  }

  toggleSection(section: string) {
    if (this.activeSection === section) {
      // Close the section if it's already open
      this.activeSection = null;
    } else {
      // Open the clicked section
      this.activeSection = section;
    }
  }

  choose(){
    this.sampleService.setSample(this.productId);
    this.router.navigate(['/choose-samples', this.orderId]);
  }
}
