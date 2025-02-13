import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-choose-samples',
  templateUrl: './choose-samples.component.html',
  styleUrl: './choose-samples.component.css'
})
export class ChooseSamplesComponent {
  orderId: number;
  order: any;
  lockedProducts: any;
  sample1: number | null = null;
  sample2: number | null = null;

  constructor(private route: ActivatedRoute,
    private orderService: OrderService, private router: Router, private productService: ProductService, private sampleService: SampleService, private snackBar : MatSnackBar) {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    });

    var selectedSampels = sampleService.getSamples();
    this.sample1 = selectedSampels.sample1;
    this.sample2 = selectedSampels.sample2;

    this.getOrderById(this.orderId);
    this.getShopProducts();
  }

  getOrderById(orderId: number) {
    return this.orderService.getById(orderId).subscribe((res: any) => {
      this.order = res.item;
    });
  }

  getShopProducts() {
    return this.productService.getShopProducts().subscribe((res: any) => {
      this.lockedProducts = res.productsToUnlock;
      this.addSampleItemsToOrder();

    });
  }

  addSampleItemsToOrder() {
    if (this.lockedProducts && this.lockedProducts.length > 0) {
      if (this.sample1) {
        const sample1Product = { ...this.lockedProducts.find((product: { id: number | null; }) => product.id == this.sample1) };
        if (sample1Product) {
          sample1Product.productId = sample1Product.id;
          sample1Product.id = 0;
          this.order.items.push(sample1Product);
        }
      }

      if (this.sample2) {
        const sample2Product = { ...this.lockedProducts.find((product: { id: number | null; }) => product.id == this.sample2) };

        if (sample2Product) {
          sample2Product.productId = sample2Product.id;
          sample2Product.id = 0;
          this.order.items.push(sample2Product);
        }
      }
    } else {
      console.warn('lockedProducts is not defined or is empty');
    }
  }

  confirm() {
    return this.orderService.confirm(this.order).subscribe(
      (res: any) => {
        this.snackBar.open("Order updated!", "dismiss", {
          panelClass: "success",
          politeness: "polite",
          duration: 4000,
          horizontalPosition: 'right'
        });
  
        // Navigate to the /membership page
        this.router.navigate(['/membership']);
      },
      (error) => {
        this.snackBar.open("There was an error updating the order!", "dismiss", {
          panelClass: "error",
          politeness: "polite",
          duration: 4000,
          horizontalPosition: 'right'
        });
      }
    );
  }

}
