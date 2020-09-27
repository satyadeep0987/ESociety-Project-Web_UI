import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { NearbyServices } from '../CustomClass/nearby-services';

@Injectable({
  providedIn: 'root'
})
export class NearbyServicesService {

  private url:string = "http://localhost:60241/api/NearbyServices";

  http:HttpClient;
  nb:NearbyServices;

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  getnbs():Observable<NearbyServices[]>{
    return this.http.get<NearbyServices[]>(this.url);
  }

  getByIdnbs(id:number):Observable<NearbyServices>{
    return this.http.get<NearbyServices>(this.url+"/"+id);
  }

  put(id:number,nbs:NearbyServices):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,nbs,this.httpOptions);
  }

  post(nbs:NearbyServices):Observable<boolean>{
    return this.http.post<boolean>(this.url,nbs,this.httpOptions);
  }

}
