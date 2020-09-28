import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthReturnClass } from './CustomClass/auth-return-class';

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(AuthReturnClass.msg == true && AuthReturnClass.Usertype == 'User')
      {
        return true;
      }
      else{
        return false;
      }
  }
  
}
