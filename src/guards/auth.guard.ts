import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private auth: AccountService,
    private router: Router,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token: string = this.auth.getToken();
    const requiredPermission = next.data['permissions'];

    if (token != "") {
      // this.auth.getUserInfo().subscribe();
      this.auth.auth.subscribe((res: any) => {

        return true;
      });
      return true;

    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
      //   const dialogRef = this.dialog.open(SigninComponent, {
      //     width: '550px'
      //   });
      return false;
    }
  }
}