import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { APICallService } from './api-call.service';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    theme: Observable<any>; 

    constructor(private apiCallService: APICallService) { }

    pay(creditAmount:any) {
        const url = environment.api + "/Payment/Pay?creditAmount=" + creditAmount;
        return this.apiCallService.post(url);
    }

    createPaymentIntent() {
        const url = environment.api + "/Payment/createPaymentIntent";
        return this.apiCallService.post(url);
    }

    verifyPayment(paymentId: string) {
        const url = environment.api + "/Payment/VerifyPayment?purchaseId=" + paymentId;
        return this.apiCallService.post(url);
    }
}