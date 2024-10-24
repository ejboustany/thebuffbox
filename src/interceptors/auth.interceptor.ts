import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _router: Router, private account: AccountService, private snackBar: MatSnackBar) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(this.updateAuthenticationToken(request)).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status == 401) {
                    this.account.logout();
                    this._router.navigate(["login"]);
                } else if (error.status == 400) {
                    if (error.error.error_description) {
                        this.snackBar.open(error.error.error_description, "dismiss", {
                            panelClass: "error",
                            politeness: "polite",
                            duration: 4000,
                            horizontalPosition: 'right'
                        });
                    } else {
                        if (error.error) {
                            this.snackBar.open(error.error, "dismiss", {
                                panelClass: "error",
                                politeness: "polite",
                                duration: 4000,
                                horizontalPosition: 'right'
                            });
                        }
                    }
                } else if (error.status == 500) {
                    this.snackBar.open("It's not you, it's us. Something went wrong, please try again!", "dismiss", {
                        panelClass: "error",
                        politeness: "polite",
                        duration: 4000,
                        horizontalPosition: 'right'
                    });
                }
                return throwError(error);
            }));
    }

    private updateAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        // add authorization header if available
        let token = this.account.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return request;
    }
}