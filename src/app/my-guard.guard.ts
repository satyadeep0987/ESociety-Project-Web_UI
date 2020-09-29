import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthReturnClass } from './CustomClass/auth-return-class';
import {CheckAuthService } from './check-auth.service'

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {

  router:Router;
  
  
  constructor(router:Router,private CheckAuth:CheckAuthService){this.router = router}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.CheckAuth.getToken()){
        return this.router.navigateByUrl('/404');
      }
      else{  
          return this.CheckAuth.getToken();
      }
  }
  
}
