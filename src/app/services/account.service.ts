import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { APICallService } from './api-call.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Identity } from '../models/identity.model';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public user: Observable<any> = this.userSubject.asObservable();

    private authSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public auth: Observable<any> = this.authSubject.asObservable();
    private apiUrl: string = environment.api;

    constructor(private apiCallService: APICallService) { }

    setApiUrl(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    register(user: any, referralCode: string) {
        const url = this.apiUrl + "/User/Register?referralCode=" + referralCode;
        return this.apiCallService.post(url, user);
    }

    login(email: string, password: string): Observable<any> {
        let bodyParams = "?username=" + email + "&password=" + password;
        let config = {
            headers: {
                "content-type": "application/json"
            }
        };
        return this.apiCallService.post(`${this.apiUrl}/User/Login` + bodyParams, null, config).pipe(
            map(data => {
                localStorage.clear();
                localStorage.setItem("auth", data.token);
                localStorage.setItem("authRefreshToken", data.refresh_token);
                this.getUserInfo().subscribe();
            })
        )
    }

    loginWithGoogle(credentials: string, referralCode: string): Observable<any> {
        return this.apiCallService.post(this.apiUrl + "/user/GoogleLogin?credential=" + credentials + "&referralCode=" + referralCode);
    }

    logout(): void {
        // const url = this.apiUrl + "/User/logout?refreshToken=" + this.getRefreshToken();
        // this.apiCallService.post(url).subscribe(res => {
          
        // });
        localStorage.removeItem("auth");
        localStorage.removeItem("authRefreshToken");
        this.userSubject.next(null);
        this.authSubject.next(null);
    }

    sendForgotPasswordEmail(user: string) {
        const url = this.apiUrl + "/User/ForgotPassword?email=" + user;
        return this.apiCallService.post(url);
    }

    sendSelectedEmail(emailType: any, identityId: number) {

        const url = this.apiUrl + "/User/SendSelectedEmail?emailType=" + emailType + "&identityId=" + identityId;
        return this.apiCallService.post(url);
    }

    verifyUserEmail(verificationCode: string, userId: string) {
        const url = this.apiUrl + "/User/VerifyEmail?code=" + encodeURIComponent(verificationCode) + "&userId=" + userId;
        return this.apiCallService.post(url);
    }

    changePassword(currentPassword: string, newPassword: string) {
        const url = this.apiUrl + "/User/ChangePassword?currentPassword=" + currentPassword + "&newPassword=" + newPassword;
        return this.apiCallService.post(url);
    }

    resetPassword(token: string, email: string, password: string) {
        const url = this.apiUrl + "/User/ResetPassword?token=" + encodeURIComponent(token) + "&email=" + encodeURIComponent(email) + "&password=" + password;
        return this.apiCallService.post(url);
    }

    setUser(user: any) {
        this.userSubject.next(user);
    }

    getToken() {
        return localStorage.getItem("auth") || "";
    }

    getRefreshToken() {
        return localStorage.getItem("authRefreshToken") || "";
    }

    getUserInfo(): Observable<any> {
        const url = this.apiUrl + "/Account/AuthInfo";
        return this.apiCallService.get(url).pipe(map(res => {
            this.authSubject.next(res);
            this.userSubject.next(res.Identity);
            return res;
        }));
    }
    save(user: Identity) {
        const url = this.apiUrl + "/Identity/Save";
        return this.apiCallService.post(url, user);
    }

    getUserId(): Observable<number> {
        return this.userSubject.pipe(
          map(user => user.id) // Assuming 'id' is the property containing user ID
        );
      }

    saveImage(user: Identity) {
        const url = this.apiUrl + "/Identity/SaveImage";
        return this.apiCallService.post(url, user);
    }

    sendContact(contact: any) {
        const url = environment.api + "/contact/SendContactEmail";
        return this.apiCallService.post(url, contact);
    }

    getBillingInfoByIdentityId(identityId: any) {
        const url = environment.api + "/identity/GetBillingInfoByIdentityId?identityId=" + identityId;
        return this.apiCallService.get(url);
    }

    updateDeliveryDuration(deliveryDuration: number){
        const url = environment.api + "/user/UpdateDeliverySchedule?deliveryDuration=" + deliveryDuration;
        return this.apiCallService.post(url);
    }

    cancelMembership(cancelReason: number){
        const url = environment.api + "/user/CancelSubscription?cancelReason=" + cancelReason;
        return this.apiCallService.post(url);
    }
}