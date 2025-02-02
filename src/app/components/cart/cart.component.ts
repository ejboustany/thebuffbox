import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: any = {};
  constructor(private dialogRef: MatDialogRef<CartComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private cartService: CartService, private router: Router) {
 
  }

  @ViewChild('subscribePopup', { static: false }) popupElement!: ElementRef;

  ngOnInit(): void {
    this.cart = this.data.cart;
  }

  close() {
    this.dialogRef.close();
  }

  delteItem(id: number) {
    this.cartService.deleteItem(id).subscribe((res: any) => {
      this.updateCart(this.cart.id);
    });
  }

  images = [
    '../../../assets/Black Magic Birthday Cake.png',
    '../../../assets/Black Magic Birthday Cake.png',
    '../../../assets/Black Magic Birthday Cake.png'
  ];
  
  currentIndex = 0;
  slidePosition = 0;

  updateCart(cartId: number) {
    const storedCartId = localStorage.getItem('cartId');
    if (storedCartId) {
      this.getCartById(cartId);
    }
  }

  getCartById(cartId: number) {
    return this.cartService.getById(cartId).subscribe((res: any) => {
      this.cart = res.item;
    });
  }


  nextSlide() {
    if (this.currentIndex < this.cart.items.length - 1) {
      this.currentIndex++;
      this.slidePosition = -(this.currentIndex * 75); // Move by 75% each time
    }
  }
  
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.slidePosition = -(this.currentIndex * 75);
    }
  }
  

  quantity: number = 1;

  increaseQty(item: any): void {
    item.quantity++;
    this.cartService.updateItem(item).subscribe((res: any) => {
      this.updateCart(this.cart.id);
    });
  }

  decreaseQty(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateItem(item).subscribe((res: any) => {
        this.updateCart(this.cart.id);
      });
    }
  }
}
