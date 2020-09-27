import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceDetails } from 'src/app/CustomClass/user-service-details';
import { UserServiceDetailsService } from 'src/app/CustomService/user-service-details.service';

@Component({
  selector: 'app-user-service-details',
  templateUrl: './user-service-details.component.html',
  styleUrls: ['./user-service-details.component.css']
})
export class UserServiceDetailsComponent implements OnInit {


  srv: UserServiceDetailsService;
  result: UserServiceDetails[];
  
  res = new UserServiceDetails();
  upt = new UserServiceDetails();
  ngZone:NgZone;
  router:Router;
  id :number;

  constructor(srv:UserServiceDetailsService,ngZone:NgZone,router:Router) {
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
    this.srv.get().subscribe((data:UserServiceDetails[])=>{
      this.result = data;
    })
  }

  InserUserService():void{
    this.srv.post(this.res).subscribe((data:boolean)=>{
      if(data)
      {
        alert("Data Inserted");
        window.location.reload();
      }
    })
  }


  ShowUserService(id:number){
    this.id = id;
    this.srv.getById(this.id).subscribe((data:UserServiceDetails)=>{
      this.upt = data;
    })
  }

  UpdateUserService():void{
    this.srv.put(this.id,this.upt).subscribe((data:string)=>
    {
      alert(data);
      window.location.reload();
    })
  }

}
