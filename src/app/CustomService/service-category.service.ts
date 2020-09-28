import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { ServiceCategory } from '../CustomClass/service-category';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoryService {

  
  private url:string = "http://localhost:60241/api/ServiceCategory";

  http:HttpClient;
  sc:ServiceCategory;

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  get():Observable<ServiceCategory[]>{
    return this.http.get<ServiceCategory[]>(this.url);
  }

  getById(id:number):Observable<ServiceCategory>{
    return this.http.get<ServiceCategory>(this.url+"/"+id);
  }

  put(id:number,scs:ServiceCategory):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,scs,this.httpOptions);
  }

  post(scs:ServiceCategory):Observable<boolean>{
    return this.http.post<boolean>(this.url,scs,this.httpOptions);
  }

}
