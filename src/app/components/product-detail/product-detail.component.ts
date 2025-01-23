import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;
  productId: number;
constructor(private route: ActivatedRoute, 
    private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
    });
    this.getProductById(this.productId);
  }

  getProductById(productId: number) {
    return this.productService.getProductById(productId).subscribe((res: any) => {
      this.product = res.item;
    });
  }
}
