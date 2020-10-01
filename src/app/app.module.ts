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
import { ServiceCategoryComponent } from './Components/service-category/service-category.component';
import { AdditionalFacilityDetailsComponent } from './Components/additional-facility-details/additional-facility-details.component';
import { UserServiceDetailsComponent } from './Components/user-service-details/user-service-details.component';
import { NearbyServicesComponent } from './Components/nearby-services/nearby-services.component';
import { LoginComponent } from './login/login.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserHomeComponent } from './UserComponent/user-home/user-home.component';
import {CheckAuthService} from './check-auth.service';
import { ProfileComponent } from './UserComponent/profile/profile.component';
import { HostFunctionComponent } from './UserComponent/host-function/host-function.component';
import { FacilityComponent } from './UserComponent/facility/facility.component';
import { CheckbookedComponent } from './UserComponent/checkbooked/checkbooked.component';



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
    ServiceCategoryComponent,
    AdditionalFacilityDetailsComponent,
    UserServiceDetailsComponent,
    NearbyServicesComponent,
    LoginComponent,
    UserNavComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserHomeComponent,
    ProfileComponent,
    HostFunctionComponent,
    FacilityComponent,
    CheckbookedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    CheckAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
