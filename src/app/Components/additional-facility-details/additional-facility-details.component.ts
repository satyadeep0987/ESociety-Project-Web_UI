import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdditionalFacilityDetails } from 'src/app/CustomClass/additional-facility-details';
import { AdditionalFacilityDetailsService } from 'src/app/CustomService/additional-facility-details.service';

@Component({
  selector: 'app-additional-facility-details',
  templateUrl: './additional-facility-details.component.html',
  styleUrls: ['./additional-facility-details.component.css']
})
export class AdditionalFacilityDetailsComponent implements OnInit {

  srv: AdditionalFacilityDetailsService;
  result: AdditionalFacilityDetails[];
  
  res = new AdditionalFacilityDetails();
  upt = new AdditionalFacilityDetails();
  ngZone:NgZone;
  router:Router;
  id :number;

  constructor(srv:AdditionalFacilityDetailsService,ngZone:NgZone,router:Router) {
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
    this.srv.get().subscribe((data:AdditionalFacilityDetails[])=>{
      this.result = data;
    })
  }

  InsertAdd():void{
    this.srv.post(this.res).subscribe((data:boolean)=>{
      if(data){
        alert("Data Inserted");
        window.location.reload();
      }
    })
  }

  GetById(id:number):void{
    this.id = id;
    this.srv.getById(this.id).subscribe((data:AdditionalFacilityDetails)=>{
      this.upt = data;
    })
  }

  updateAdditional():void{
    this.srv.put(this.id,this.upt).subscribe((data:string)=>{
      alert(data);
      window.location.reload();
    })
  }

}
