import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { APICallService } from './api-call.service';
import { map } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    constructor(private apiCallService: APICallService, private accountService: AccountService) { }

    // get(pageNumber: any, countPerPage: any) {
    //     const url = environment.api + "/page/Get?pageNumber=" + pageNumber + "&countPerPage=" + countPerPage + "&orderby=CreatedDate" + "&sort=des";
    //     return this.apiCallService.get(url);
    // }

    // getByProjectId(pageNumber: any, countPerPage: any, projectId: any) {
    //     const url = environment.api + "/page/Get?pageNumber=" + pageNumber + "&countPerPage=" + countPerPage + "&orderby=CreatedDate" + "&sort=des" + "&projectId=" + projectId;
    //     return this.apiCallService.get(url);
    // }

    getById(id : any) {
        const url = environment.api + "/theQuiz/GetItem?id=" + id;
        return this.apiCallService.get(url);
    }

    // delete(id:any){
    //     const url = environment.api + "/page/Delete?id=" + id;
    //     return this.apiCallService.delete(url);
    // }

    
    submitQuiz(quiz: any, registration: boolean) {
        const url = environment.api + "/theQuiz/TakeQuiz?registration=" + registration;

        if(!registration){
            return this.apiCallService.post(url, quiz);
        }
        else{
            return this.apiCallService.post(url, quiz).pipe(
                map(data => {
                    localStorage.clear();
                    localStorage.setItem("auth", data.authenticationResult.token);
                    localStorage.setItem("authRefreshToken", data.authenticationResult.refresh_token);
                    this.accountService.getUserInfo().subscribe();
                    return data;
                })
            );
        }
    }
}