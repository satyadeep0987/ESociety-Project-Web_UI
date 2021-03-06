import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomFunctionCategory } from 'src/app/CustomClass/custom-function-category';
import { CustomFunctionDetails } from 'src/app/CustomClass/custom-function-details';
import { CustomOwner } from 'src/app/CustomClass/custom-owner';
import { CustomFunctionDetailsService } from 'src/app/CustomService/custom-function-details.service';
import { FunctionCategoryService } from 'src/app/CustomService/function-category.service';
import { OwnerService } from 'src/app/CustomService/owner.service';


@Component({
  selector: 'app-host-function',
  templateUrl: './host-function.component.html',
  styleUrls: ['./host-function.component.css']
})
export class HostFunctionComponent implements OnInit {

  u:CustomOwner;
  
  resUp = new CustomOwner();
  res = new CustomFunctionDetails();
  srv:OwnerService;
  funcs:FunctionCategoryService;
  fs:CustomFunctionDetailsService;
  id:number = parseInt(localStorage.getItem('sessionUserId'));
  ngZone:NgZone;
  router:Router;
  result : CustomFunctionCategory[];


  constructor(srv:OwnerService,ngzone:NgZone,router:Router,funcs:FunctionCategoryService, fs:CustomFunctionDetailsService) {
    this.srv = srv;
    this.ngZone = ngzone;
    this.router = router;
    this.fs =fs;
    this.funcs = funcs;
   }

 ngOnInit(): void {
   this.Show();
   this.ShowCategory()
 }

 Show():void{
   this.srv.getByIdOwner(this.id).subscribe((data:CustomOwner)=>{
    this.u = data;
     this.resUp = data; 
   })
 }

 ShowCategory():void{
  this.funcs.GetFunctionCategory().subscribe((data:CustomFunctionCategory[])=>{
    this.result = data;
  }) 
}

InsertBookin():void{
  
  this.res.Owner_ID = this.id;
  this.res.Function_Status = 0;
  console.log(this.res);
  this.fs.postDetails(this.res).subscribe((data:boolean)=>{
    if(data){
      alert("Function Booked ");
    }
    window.location.reload();
   
  })
}


}
