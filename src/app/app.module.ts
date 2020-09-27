import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionCategoryComponent } from './Components/function-category/function-category.component';
import { FunctionDetailsComponent } from './Components/function-details/function-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwnerComponent } from './Components/owner/owner.component';
import { NearServiceCategoryComponent } from './Components/near-service-category/near-service-category.component';
import { HouseComponent } from './Components/house/house.component';
import { SocietyComponent } from './Components/society/society.component';
import { GuardDutyComponent } from './Components/guard-duty/guard-duty.component';
import { ParkingDetailsComponent } from './Components/parking-details/parking-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FunctionCategoryComponent,
    FunctionDetailsComponent,
    NavbarComponent,
    OwnerComponent,
    NearServiceCategoryComponent,
    HouseComponent,
    SocietyComponent,
    GuardDutyComponent,
    ParkingDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
