import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {AuthReturnClass } from './CustomClass/auth-return-class'

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {

  constructor() { }

  getToken(){
    return !!localStorage.getItem('sessionUsertype');
  }

  getTokenUser(){
    return !!localStorage.getItem('sessionUsertype');
  }

}
