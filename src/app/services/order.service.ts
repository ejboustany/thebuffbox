import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { APICallService } from './api-call.service';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private apiCallService: APICallService) { }

    getCheckoutOrder(orderId: any) {
        const url = environment.api + "/checkout/GetCheckoutOrder?orderId=" + orderId;
        return this.apiCallService.get(url);
    }

    getById(orderId: any) {
        const url = environment.api + "/order/GetItem?id=" + orderId;
        return this.apiCallService.get(url);
    }

    save(order: any) {
        const url = environment.api + "/order/Save";
        return this.apiCallService.post(url, order);
    }

    confirm(order: any) {
        const url = environment.api + "/order/ConfirmNewOrder";
        return this.apiCallService.post(url, order);
    }
}