import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthClass } from '../CustomClass/auth-class';
import { AuthReturnClass,ReturnClass } from '../CustomClass/auth-return-class';
import { LoginService } from '../CustomService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ath:LoginService;
  returnAuth = new ReturnClass();
  insertAuth = new AuthClass();
  ngZone:NgZone;
  router:Router;
  

  constructor(ath:LoginService,ngZone:NgZone,router:Router) {
    this.ngZone = ngZone;
    this.router = router;
    this.ath = ath;
   }

  ngOnInit(): void {
  }

  CheckLogin():void{
    if(this.insertAuth.type == 'Admin')
    {
      //console.log(this.insertAuth);
      this.ath.Login(this.insertAuth).subscribe((data:ReturnClass)=>{
        this.returnAuth = data;
        if(this.returnAuth.msg == true)
        {
          AuthReturnClass.id = this.returnAuth.id;
          AuthReturnClass.msg = this.returnAuth.msg;
          AuthReturnClass.username = this.returnAuth.username;
          AuthReturnClass.Usertype = this.insertAuth.type;
          alert("Login Sucessfull");
          this.ngZone.run(() => this.router.navigateByUrl('/AdminHome'));
        }
        else{
          alert("Login Failed")
        }
        
      })
    }

    if(this.insertAuth.type == 'User')
    {
      //console.log(this.insertAuth);
      this.ath.Login(this.insertAuth).subscribe((data:ReturnClass)=>{
        this.returnAuth = data;
        if(this.returnAuth.msg == true)
        {
          AuthReturnClass.id = this.returnAuth.id;
          AuthReturnClass.msg = this.returnAuth.msg;
          AuthReturnClass.username = this.returnAuth.username;
          AuthReturnClass.Usertype = this.insertAuth.type;
          alert("Login Sucessfull");
          this.ngZone.run(() => this.router.navigateByUrl('/Home'));
        }
        else{
          alert("Login Failed")
        }
      })
    }
  }

}
