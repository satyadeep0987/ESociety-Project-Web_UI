import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { CustomFunctionDetails } from '../CustomClass/custom-function-details';


@Injectable({
  providedIn: 'root'
})
export class CustomFunctionDetailsService {

  private url:string = "http://localhost:60241/api/FunctionDetails";

  http:HttpClient;
  

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  getdetails():Observable<CustomFunctionDetails[]>{
    return this.http.get<CustomFunctionDetails[]>(this.url);
  }

  getbbyIdDetails(id:number):Observable<CustomFunctionDetails>{
    return this.http.get<CustomFunctionDetails>(this.url+"/"+id);
  }

  putDetails(id:number,fd:CustomFunctionDetails):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,fd,this.httpOptions);
  }

  postDetails(fd:CustomFunctionDetails):Observable<boolean>{
    return this.http.post<boolean>(this.url,fd,this.httpOptions);
  }
}
