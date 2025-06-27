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

    getProductById(productId: any) {
        const url = environment.api + "/product/GetItem?id=" + productId;
        return this.apiCallService.get(url);
    }

    getShopProducts() {
        const url = environment.api + "/product/GetShopProducts";
        return this.apiCallService.get(url);
    }

    getPersonalizedOptions() {
        const url = environment.api + "/product/GetPersonalizedOptions";
        return this.apiCallService.get(url);
    }

    addReview(review: any) {
        const url = environment.api + "/productReview/Save";
        return this.apiCallService.post(url, review);
    }
}