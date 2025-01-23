import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  shop: any;
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.getShopProducts();
  }

  getShopProducts() {
    return this.productService.getShopProducts().subscribe((res: any) => {
      this.shop = res;
    });
  }

  addToCart(){
    
  }
}
