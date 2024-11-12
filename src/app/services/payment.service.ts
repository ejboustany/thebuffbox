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

    createPaymentIntent(orderId: number) {
        const url = environment.api + "/Payment/createPaymentIntent?orderId=" + orderId;
        return this.apiCallService.post(url);
    }

    verifyPayment(paymentId: string, identity: any) {
        const url = environment.api + "/Payment/VerifyPayment?paymentIntent=" + paymentId;
        return this.apiCallService.post(url, identity).pipe(
            map(data => {
                localStorage.setItem("auth", data.token);
                localStorage.setItem("authRefreshToken", data.refresh_token);
                this.accountService.getUserInfo().subscribe();
            })
        );
    }
}