import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {ParkingDetails} from 'src/app/CustomClass/parking-details'
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ParkingDetailsService {

 
  http:HttpClient;
  url = 'http://localhost:60241/api/ParkingDetails';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
  constructor(http:HttpClient) {
    this.http = http;
   }

    // To Show All Parking Details of the society
    ViewAllParkingDetails():Observable<ParkingDetails[]>
    {
      return this.http.get<ParkingDetails[]>(this.url);
    }
 
    // To view the searched parking
    ViewSelectedVisitor(id:number):Observable<ParkingDetails>
    {
      return this.http.get<ParkingDetails>(this.url + "/" + id);
    }
 
    // To Insert new parking in the DB
    InsertNewParking(pd:ParkingDetails):Observable<boolean>
    {
      return this.http.post<boolean>(this.url,pd,this.httpOptions);
    }
 
    // To update Visitor Parking data
    UpdateVisitorParking(id:number,pd:ParkingDetails):Observable<string>
    {
      console.log(pd);
      return this.http.put<string>(this.url+"/"+id,pd,this.httpOptions);
    }
}
