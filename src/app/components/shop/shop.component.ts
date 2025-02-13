import { NoopScrollStrategy, RepositionScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
import { AccountService } from 'src/app/services/account.service';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  shop: any;
  cartId: number = 0;
  cart: any;
  searchQuery: string = '';

  user: Identity;
  constructor(private productService: ProductService, public dialog: MatDialog, private cartService: CartService, private accountService: AccountService) {
    //this.loadCart();
     if (this.accountService.getToken()) {
          this.accountService.getUserInfo().subscribe();
        }
        this.accountService.auth.subscribe((res: AuthenticationInfo) => {
          if(res?.identity != null){
            this.user = res?.identity;
          }
        });
  }

  get filteredSubscribedProducts() {
    return this.shop.subscribedToProducts.filter((product: { brandText: string; title: string; }) => 
      product.brandText.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  loadCart() {
    const storedCartId = localStorage.getItem('cartId');
    if (storedCartId) {
      this.cartId = parseInt(storedCartId, 10) || 0;
      this.getCartById(this.cartId);
    }
  }


  getCartById(cartId: number) {
    return this.cartService.getById(cartId).subscribe((res: any) => {
      this.cart = res.item;
      this.openCart(res.item);
    });
  }

  
  ngOnInit(): void {
    this.getShopProducts();
  }
  

  getShopProducts() {
    return this.productService.getShopProducts().subscribe((res: any) => {
      this.shop = res;
    });
  }

 

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
