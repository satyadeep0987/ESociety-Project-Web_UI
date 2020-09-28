import { Component, Injectable, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCategory } from 'src/app/CustomClass/service-category';
import { ServiceCategoryService } from 'src/app/CustomService/service-category.service';


@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css']
})
export class ServiceCategoryComponent implements OnInit {

  srv: ServiceCategoryService;
  result: ServiceCategory[];
  
  res = new ServiceCategory();
  upt = new ServiceCategory();
  ngZone:NgZone;
  router:Router;
  id :number;

  constructor(srv:ServiceCategoryService,ngZone:NgZone,router:Router) {
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
    this.srv.get().subscribe((data:ServiceCategory[])=>{
      this.result = data;
    })
  }

  InsertCAtegory():void{
    this.srv.post(this.res).subscribe((data:boolean)=>{
      if(data)
      {
        alert("Data Inserted");
      }
      window.location.reload();
    })
  }

  showServices(id:number):void{
    this.id=id;
    this.srv.getById(this.id).subscribe((data:ServiceCategory)=>{
      this.upt=data;
    })
  }

  UpdateService():void{
    this.srv.put(this.id,this.upt).subscribe((data:string)=>{
      alert(data);
      window.location.reload();
    })
  }

}
