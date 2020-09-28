import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NearbyServices } from 'src/app/CustomClass/nearby-services';
import { NearbyServicesService } from 'src/app/CustomService/nearby-services.service';

@Component({
  selector: 'app-nearby-services',
  templateUrl: './nearby-services.component.html',
  styleUrls: ['./nearby-services.component.css']
})
export class NearbyServicesComponent implements OnInit {

  srv: NearbyServicesService;
  result: NearbyServices[];
  
  res = new NearbyServices();
  upt = new NearbyServices();
  ngZone:NgZone;
  router:Router;
  id :number;

  constructor(srv:NearbyServicesService,ngZone:NgZone,router:Router) {
    this.ngZone = ngZone;
    this.router = router;
    this.srv = srv;
   }

   inser:boolean;
   showed:boolean;
   updat:boolean;


  ngOnInit(): void {
    this.ShowAllCategory();
    this.inser=true; 
    this.showed = false;
    this.updat = true;
  }

  show():void{
    this.inser=true; 
    this.showed = false;
    this.updat = true;
    this.ShowAllCategory()
  }

  insert():void{
    this.inser=false; 
    this.showed = true;
    this.updat = true;
  }

  update():void{
    this.inser=true; 
    this.showed = true;
    this.updat = false;
  }

  ShowAllCategory():void{
    this.srv.getnbs().subscribe((data:NearbyServices[])=>{
      this.result = data;
    })
  }

  InsertNBS():void{
    this.srv.post(this.res).subscribe((data:boolean)=>{
      if(data){
        alert("Data Inserted");
        window.location.reload();
      }
    })
  }

  ShowNBS(id:number):void{
    this.id = id;
    this.srv.getByIdnbs(this.id).subscribe((data:NearbyServices)=>{
      this.upt = data;
    })
  }

  UpdateNBS():void{
    this.srv.put(this.id,this.upt).subscribe((data:string)=>{
      alert(data);
      window.location.reload();
    })
  }


}
