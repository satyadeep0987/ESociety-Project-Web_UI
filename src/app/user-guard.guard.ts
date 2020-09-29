import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckAuthService } from './check-auth.service';
import { AuthReturnClass } from './CustomClass/auth-return-class';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  router:Router;
  constructor(router:Router,private check:CheckAuthService){this.router = router}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.check.getTokenUser())
      {
        return this.router.navigateByUrl('/404');
      }
      else{
        return this.check.getTokenUser();
      }
  }
  
}
