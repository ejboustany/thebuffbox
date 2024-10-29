import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { APICallService } from './api-call.service';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    constructor(private apiCallService: APICallService) { }

    // get(pageNumber: any, countPerPage: any) {
    //     const url = environment.api + "/page/Get?pageNumber=" + pageNumber + "&countPerPage=" + countPerPage + "&orderby=CreatedDate" + "&sort=des";
    //     return this.apiCallService.get(url);
    // }

    // getByProjectId(pageNumber: any, countPerPage: any, projectId: any) {
    //     const url = environment.api + "/page/Get?pageNumber=" + pageNumber + "&countPerPage=" + countPerPage + "&orderby=CreatedDate" + "&sort=des" + "&projectId=" + projectId;
    //     return this.apiCallService.get(url);
    // }

    // getById(id : any) {
    //     const url = environment.api + "/page/GetItem?id=" + id;
    //     return this.apiCallService.get(url);
    // }

    // delete(id:any){
    //     const url = environment.api + "/page/Delete?id=" + id;
    //     return this.apiCallService.delete(url);
    // }

    
    submitQuiz(quiz: any) {
        const url = environment.api + "/theQuiz/TakeQuiz";
        return this.apiCallService.post(url, quiz);
    }
}