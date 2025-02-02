import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { APICallService } from './api-call.service';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems = new BehaviorSubject<any[]>([]);
    cartItems$ = this.cartItems.asObservable(); // 
    
    constructor(private apiCallService: APICallService) { }

    addToCart(productId: any, cartId: any) {
        const url = environment.api + "/cart/addToCart?productId=" + productId + "&cartId=" + cartId;
        
        return this.apiCallService.post(url, cartId).pipe(
            tap((updatedCart: any) => {
                this.cartItems.next(updatedCart.items); // Update cart state after API response
            })
        );
    }

    getById(id: any) {
        const url = environment.api + "/cart/GetItem?id=" + id;
        
        return this.apiCallService.get(url).pipe(
            tap((cart: any) => {
                this.cartItems.next(cart.item.items); // Update cart state after API response
            })
        );
    }

    
    deleteItem(id:any){
        const url = environment.api + "/cartItem/Delete?id=" + id;
        return this.apiCallService.delete(url);
    }

    updateItem(item:any){
        const url = environment.api + "/cartItem/save";
        return this.apiCallService.post(url, item);
    }

    
      getCartItems() {
        return this.cartItems.value;
      }
}