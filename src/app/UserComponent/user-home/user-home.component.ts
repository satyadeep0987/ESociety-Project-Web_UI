import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomOwner } from 'src/app/CustomClass/custom-owner';
import { OwnerService } from 'src/app/CustomService/owner.service';
import { CustomSociety } from 'src/app/CustomClass/custom-society';
import { SocietyService } from 'src/app/CustomService/society.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  u:CustomOwner;
  //resUp:CustomSociety;
  resUp = new CustomSociety();
  srv:OwnerService;
  src:SocietyService;
  id:number = parseInt(localStorage.getItem('sessionUserId'));
  ids:string;
  ngZone:NgZone;
  router:Router;

  constructor(srv:OwnerService,src:SocietyService,ngzone:NgZone,router:Router) {
    this.srv = srv;
    this.ngZone = ngzone;
    this.router = router;
    this.src = src;
   }

  ngOnInit(): void {
    this.ShowAllDetails();
    
  }

  ShowAllDetails():void{
    this.srv.getByIdOwner(this.id).subscribe((data:CustomOwner)=>{
     this.u = data;
     this.ids=this.u.Society_ID;
     this.getAdd();
    });
  }

  getAdd():void{
      this.src.getbyIdSocitey(this.ids).subscribe((data:CustomSociety)=>{
        this.resUp = data;
    })
  }

  

  
    
   


}
