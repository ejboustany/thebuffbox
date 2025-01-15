import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { APICallService } from './api-call.service';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    theme: Observable<any>; 

    constructor(private apiCallService: APICallService, private accountService: AccountService) { }

    pay(creditAmount:any) {
        const url = environment.api + "/Payment/Pay?creditAmount=" + creditAmount;
        return this.apiCallService.post(url);
    }

    createPaymentIntent(orderId: number, paymentMethodId: string, identity: any) {
        const url = environment.api + "/Payment/createPaymentIntent?orderId=" + orderId + "&paymentMethodId=" + paymentMethodId;
        return this.apiCallService.post(url, identity);
    }

    verifyPayment(paymentId: string, paymentMethodId: string, deliverySchedule: number, orderId: number) {
        const url = environment.api + "/Payment/Subscribe?paymentIntent=" + paymentId 
        + "&paymentMethodId="+paymentMethodId + "&deliverySchedule=" + deliverySchedule + "&orderId=" + orderId;
        return this.apiCallService.post(url).pipe(
            map(data => {
                localStorage.setItem("auth", data.token);
                localStorage.setItem("authRefreshToken", data.refresh_token);
                this.accountService.getUserInfo().subscribe();
            })
        );
    }
}