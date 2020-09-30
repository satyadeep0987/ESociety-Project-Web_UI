import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomOwner } from 'src/app/CustomClass/custom-owner';
import { OwnerService } from 'src/app/CustomService/owner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  u:CustomOwner;
  
  resUp = new CustomOwner();
  srv:OwnerService;
  id:number = parseInt(localStorage.getItem('sessionUserId'));
  ngZone:NgZone;
  router:Router;

  constructor(srv:OwnerService,ngzone:NgZone,router:Router) {
    this.srv = srv;
    this.ngZone = ngzone;
    this.router = router;
   }


  inser:boolean;
  showed:boolean;
  updat:boolean;


 ngOnInit(): void {
   this.ShowAllDetails();
   this.inser=true; 
   this.showed = false;
   this.updat = true;
 }

 show():void{
   this.inser=true; 
   this.showed = false;
   this.updat = true;
   this.ShowAllDetails()
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

 

 

 ShowAllDetails():void{
   this.srv.getByIdOwner(this.id).subscribe((data:CustomOwner)=>{
    this.u = data;
     this.resUp = data;
     
   })
 }

 OwnerUpdate():void{
   this.srv.putOwner(this.id,this.resUp).subscribe((data:string)=>{
    alert(data);
    window.location.reload();
   })
 }

 oldpass:string;
 newpass:string;
 passupdate():void{
   if(this.oldpass != this.resUp.Owner_Password)
   {
     alert("Enter Correct Old Password");
   }
   else{
    this.resUp.Owner_Password = this.newpass;
    this.srv.putOwner(this.id,this.resUp).subscribe((data:string)=>{
      alert(data+" Password Updated");
      window.location.reload();
     })
   }

 }

}
