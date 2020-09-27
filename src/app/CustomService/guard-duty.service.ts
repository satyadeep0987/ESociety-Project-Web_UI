import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { GuardDuty } from '../CustomClass/guard-duty';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GuardDutyService {

  gd : GuardDuty;
  http: HttpClient;
  private url = 'http://localhost:60241/api/GuardDuty';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
  constructor(http:HttpClient) {
    this.http = http;
   }

   // To Show All The Visitors of the society
   ViewAllVisitors():Observable<GuardDuty[]>
   {
     return this.http.get<GuardDuty[]>(this.url);
   }

   // To view the searched visitor 
   ViewSelectedVisitor(id:number):Observable<GuardDuty>
   {
     return this.http.get<GuardDuty>(this.url + "/" + id);
   }

   // To Insert a User in the DB
   InsertNewVisitor(gd:GuardDuty):Observable<string>
   {
     return this.http.post<string>(this.url,gd,this.httpOptions);
   }

   // To update Visitor data
   UpdateVisitor(id:number,gd):Observable<string>
   {
     return this.http.put<string>(this.url + "/" + id,gd,this.httpOptions);
   }
}
