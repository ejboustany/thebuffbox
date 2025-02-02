import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;
  productId: number;
  personalizedOptions: any;
  activeSection: string | null = null;

  
constructor(private route: ActivatedRoute, 
    private productService: ProductService, private router: Router,  private cartService: CartService, public dialog: MatDialog) {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
    });
    this.getProductById(this.productId);
  }

  getProductById(productId: number) {
    return this.productService.getProductById(productId).subscribe((res: any) => {
      this.product = res.item;
      this.getPersonalizedOptions();
    });
  }

  getPersonalizedOptions() {
    return this.productService.getPersonalizedOptions().subscribe((res: any) => {
      this.personalizedOptions = res;
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


  navigateAndRefresh(productId: string) {
    this.router.navigate(['/product-detail', productId])
      .then(() => {
        window.location.reload();
      });
  }
  cartId: number = 0;

  addToCart(productId: any) {
    const storedCartId = localStorage.getItem('cartId');
    this.cartService.addToCart(productId, storedCartId == null ? 0 : storedCartId).subscribe(
      (res: any) => {
        if (res && res.id) {
          this.cartId = res.id;
          localStorage.setItem('cartId', this.cartId.toString());
          this.openCart(res);
        }
      },
      (error) => {
        console.error('Error adding to cart:', error);
      }
    );
  }

   openCart(cart: any) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.scrollStrategy = new NoopScrollStrategy();
      dialogConfig.disableClose = false;  // Allow closing when clicking outside
      dialogConfig.autoFocus = false;
      dialogConfig.data = {
        cart: cart
      };
  
      const dialogRef = this.dialog.open(CartComponent, dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {
        ('The dialog was closed');
      });
  
      
    }
}
