import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import {AuthReturnClass} from '../CustomClass/auth-return-class'


@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  navbarOpen = false;
	public clicked = false;
	_el: any;
	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}

	ngAfterViewInit(): void {
		throw new Error("Method not implemented.");
	}

	onClick(event): void {
		event.preventDefault();
		event.stopPropagation();
		this.clicked = true;
	}

	name:string = localStorage.getItem('sessionUserName');
	ngZone:NgZone;
	Router:Router;
	ifpresent:boolean;

  constructor(ngZone:NgZone,Router:Router) {
	  this.ngZone = ngZone;
	  this.Router = Router;
   }

  ngOnInit(): void {
	this.CheckUse();
  }

 

	
	logout():void{
		AuthReturnClass.id =null;
		AuthReturnClass.username = null;
		AuthReturnClass.msg = null;
		localStorage.clear();
		this.ngZone.run(() => this.Router.navigateByUrl('/Login'));
	}

	CheckUse():void{
		if(this.name == null)
		{
			this.ifpresent = true;
		}
		else{
			this.ifpresent = false;
		}
	}


}
