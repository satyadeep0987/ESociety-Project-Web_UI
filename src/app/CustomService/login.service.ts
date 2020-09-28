import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable, NEVER } from 'rxjs'
import { HttpHeaders } from '@angular/common/http';
import { AuthClass } from '../CustomClass/auth-class';
import { AuthReturnClass, ReturnClass } from '../CustomClass/auth-return-class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  http: HttpClient;
  url: string = 'http://localhost:60241/api/Auth';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
 
  constructor(http: HttpClient) {
    this.http = http;
   }

   Login(es:AuthClass):Observable<ReturnClass>{
     return this.http.post<ReturnClass>(this.url,es,this.httpOptions)
   }

  

}
