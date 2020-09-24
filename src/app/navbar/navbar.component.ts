import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
