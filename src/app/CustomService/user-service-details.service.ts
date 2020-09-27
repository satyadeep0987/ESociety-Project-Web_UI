import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { UserServiceDetails } from '../CustomClass/user-service-details';

@Injectable({
  providedIn: 'root'
})
export class UserServiceDetailsService {

  private url:string = "http://localhost:60241/api/UserServiceDetails";

  http:HttpClient;
  usd:UserServiceDetails;

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  get():Observable<UserServiceDetails[]>{
    return this.http.get<UserServiceDetails[]>(this.url);
  }

  getById(id:number):Observable<UserServiceDetails>{
    return this.http.get<UserServiceDetails>(this.url+"/"+id);
  }

  put(id:number,usd:UserServiceDetails):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,usd,this.httpOptions);
  }

  post(usd:UserServiceDetails):Observable<boolean>{
    return this.http.post<boolean>(this.url,usd,this.httpOptions);
  }
 
}
