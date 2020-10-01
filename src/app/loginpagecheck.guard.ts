import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckAuthService } from './check-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginpagecheckGuard implements CanActivate {

  constructor(private au:CheckAuthService,private ro:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!!this.au.getAdminToken())
    {
      return this.au.getAdminToken();
    }
    else if(!!this.au.getTokenUser)
    {
      return this.au.getTokenUser();
    }
    else
    {
      return this.ro.navigateByUrl('/Login');
    }
  }
  
}
