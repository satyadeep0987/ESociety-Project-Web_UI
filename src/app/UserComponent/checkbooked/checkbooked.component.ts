import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomFunctionCategory } from 'src/app/CustomClass/custom-function-category';
import { CustomFunctionDetails } from 'src/app/CustomClass/custom-function-details';
import { CustomOwner } from 'src/app/CustomClass/custom-owner';
import { CustomFunctionDetailsService } from 'src/app/CustomService/custom-function-details.service';
import { FunctionCategoryService } from 'src/app/CustomService/function-category.service';
import { OwnerService } from 'src/app/CustomService/owner.service';

@Component({
  selector: 'app-checkbooked',
  templateUrl: './checkbooked.component.html',
  styleUrls: ['./checkbooked.component.css']
})
export class CheckbookedComponent implements OnInit {

  
  u:CustomOwner;
  
  resUp = new CustomOwner();
  res = new CustomFunctionDetails();
  srv:OwnerService;
  funcs:FunctionCategoryService;
  fs:CustomFunctionDetailsService;
  id:number = parseInt(localStorage.getItem('sessionUserId'));
  ids:number;
  ngZone:NgZone;
  router:Router;



  constructor(srv:OwnerService,ngzone:NgZone,router:Router,funcs:FunctionCategoryService, fs:CustomFunctionDetailsService) {
    this.srv = srv;
    this.ngZone = ngzone;
    this.router = router;
    this.fs =fs;
    this.funcs = funcs;
   }

 ngOnInit(): void {
   this.Show();
   
 }

 Show():void{
   this.srv.getByIdOwner(this.id).subscribe((data:CustomOwner)=>{
    this.u = data;
     this.resUp = data; 
   })
 }




checkbooking(id:number):void{
  this.ids = id;
  this.fs.getbbyIdDetails(this.ids).subscribe((data:CustomFunctionDetails)=>{
    this.res = data;
    console.log(this.res);
    if(this.id == this.res.Owner_ID)
    {
      if(this.res.Function_Status == 1){
        alert("Your fuction booking is Acepted");
      }
      else{
        alert("Your fuction booking is Pending");
      }
      
    }
    else{
      alert("Invalid booking ID");
    }
  })
}



}

