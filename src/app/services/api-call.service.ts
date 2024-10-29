import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

declare var _: any;

@Injectable({
  providedIn: 'root'
})
export class APICallService {
  constructor(private http: HttpClient) {
  };

  get(url: string, config? : any): Observable<any> {
    return this.http.get<any>(url, config).pipe(share());
  }

  post(url: string, data? : any, config? : any): Observable<any> {
    return this.http.post<any>(url, data, config).pipe(share());
  }

  put(url: string, data? : any, config? : any): Observable<any> {
    return this.http.put<any>(url, data, config).pipe(share());
  }

  delete(url: string, config? : any): Observable<any> {
    return this.http.delete(url, config).pipe(share());
  }

}