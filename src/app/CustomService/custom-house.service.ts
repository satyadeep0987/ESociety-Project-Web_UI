import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { CustomHouse } from '../CustomClass/custom-house';


@Injectable({
  providedIn: 'root'
})
export class CustomHouseService {

  private url:string = "http://localhost:60241/api/HouseDetails";

  http:HttpClient;
  

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  getHouses():Observable<CustomHouse[]>{
   return this.http.get<CustomHouse[]>(this.url);
  }

  getbyIdHouse(id:string):Observable<CustomHouse>{
    return this.http.get<CustomHouse>(this.url+"/"+id);
  }

  postHouse(h:CustomHouse):Observable<boolean>{
    return this.http.post<boolean>(this.url,h,this.httpOptions);
  }

  putHouse(id:string,h:CustomHouse):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,h,this.httpOptions);
  }

}
