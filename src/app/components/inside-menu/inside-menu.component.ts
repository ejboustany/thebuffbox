import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, Input, NgZone, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-inside-menu',
  templateUrl: './inside-menu.component.html',
  styleUrl: './inside-menu.component.css'
})
export class InsideMenuComponent implements OnInit {
  isDropdownOpen = false;
  @Input() showBottomMenu: boolean = true;
  @Input() allowClosing: boolean = false;
  cartItemCount = 0;

  constructor(private router: Router, public dialog: MatDialog, private cartService: CartService) {
    this.loadCart();
  }

  loadCart() {
    const storedCartId = localStorage.getItem('cartId');
    if (storedCartId) {
      const id = parseInt(storedCartId, 10) || 0;
      this.getCartById(id);
    }
  }


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isHowItWorksActive = false;

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.length; // Update count dynamically
    });
  }

  getCartById(cartId: number) {
    return this.cartService.getById(cartId).subscribe((res: any) => {
      this.cart = res.item;
      this.cartItemCount = res.item.items.length;
    });
  }


  scrollToSection(id: string): void {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.isHowItWorksActive = true;
    }
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }

  cart: any;
  openCart() {
    const cartId = localStorage.getItem('cartId');
    if(cartId){
      this.cartService.getById(cartId).subscribe((res: any) => {
        this.cart = res.item;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.scrollStrategy = new NoopScrollStrategy();
        dialogConfig.disableClose = false;  // Allow closing when clicking outside
        dialogConfig.autoFocus = false;
    
        dialogConfig.data = {
          cart: this.cart
        };
        const dialogRef = this.dialog.open(CartComponent, dialogConfig);
        dialogConfig.disableClose = false;  // Allow closing when clicking outside
    
        dialogRef.afterClosed().subscribe(result => {
          ('The dialog was closed');
        });
      });
    }
  }
}