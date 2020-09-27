import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { AdditionalFacilityDetails } from '../CustomClass/additional-facility-details';

@Injectable({
  providedIn: 'root'
})
export class AdditionalFacilityDetailsService {

  private url:string = "http://localhost:60241/api/AdditionalFacilityDetails";

  http:HttpClient;
  ad:AdditionalFacilityDetails;

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  get():Observable<AdditionalFacilityDetails[]>{
    return this.http.get<AdditionalFacilityDetails[]>(this.url);
  }

  getById(id:number):Observable<AdditionalFacilityDetails>{
    return this.http.get<AdditionalFacilityDetails>(this.url+"/"+id);
  }

  put(id:number,ads:AdditionalFacilityDetails):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,ads,this.httpOptions);
  }

  post(ads:AdditionalFacilityDetails):Observable<boolean>{
    return this.http.post<boolean>(this.url,ads,this.httpOptions);
  }

}
