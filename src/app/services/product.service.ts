import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { APICallService } from './api-call.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private apiCallService: APICallService) { }

    getProductQuizResults(quiz: any) {
        const url = environment.api + "/product/GetProductQuizResults";
        return this.apiCallService.post(url, quiz);
    }

    getProductByQuiz(quizId: any) {
        const url = environment.api + "/product/GetQuizProducts?quizId=" + quizId;
        return this.apiCallService.get(url);
    }
}