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
}