import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalFacilityDetailsComponent } from './Components/additional-facility-details/additional-facility-details.component';
import { FunctionCategoryComponent } from './Components/function-category/function-category.component';
import { FunctionDetailsComponent } from './Components/function-details/function-details.component';
import { GuardDutyComponent } from './Components/guard-duty/guard-duty.component';
import { HomeComponent } from './Components/home/home.component';
import { HouseComponent } from './Components/house/house.component';
import { NearServiceCategoryComponent } from './Components/near-service-category/near-service-category.component';
import { NearbyServicesComponent } from './Components/nearby-services/nearby-services.component';
import { OwnerComponent } from './Components/owner/owner.component';
import { ParkingDetailsComponent } from './Components/parking-details/parking-details.component';
import { ServiceCategoryComponent } from './Components/service-category/service-category.component';
import { SocietyComponent } from './Components/society/society.component';
import { UserServiceDetailsComponent } from './Components/user-service-details/user-service-details.component';
import { LoginComponent } from './login/login.component';
import { LoginpagecheckGuard } from './loginpagecheck.guard';
import { MyGuardGuard } from './my-guard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserGuardGuard } from './user-guard.guard';
import { CheckbookedComponent } from './UserComponent/checkbooked/checkbooked.component';
import { HostFunctionComponent } from './UserComponent/host-function/host-function.component';
import { ProfileComponent } from './UserComponent/profile/profile.component';
import { UserHomeComponent } from './UserComponent/user-home/user-home.component';


    const routes: Routes = [
    {path:'FunctionCategory',component:FunctionCategoryComponent,canActivate: [MyGuardGuard]},
    {path:'FunctionDetails',component:FunctionDetailsComponent,canActivate: [MyGuardGuard]},
    {path:'Owner',component:OwnerComponent,canActivate: [MyGuardGuard]},
    {path:'NearByServiceCAtegory',component:NearServiceCategoryComponent,canActivate: [MyGuardGuard]},
    {path:'House',component:HouseComponent,canActivate: [MyGuardGuard]},
    {path:'Society',component:SocietyComponent,canActivate: [MyGuardGuard]},
    {path:'Guard',component:GuardDutyComponent,canActivate: [MyGuardGuard]},
    {path:'parking',component:ParkingDetailsComponent,canActivate: [MyGuardGuard]},
    {path:'servicesCategory',component:ServiceCategoryComponent,canActivate: [MyGuardGuard]},
    {path:'UserService',component:UserServiceDetailsComponent,canActivate: [MyGuardGuard]},
    {path:'NaerByServices',component:NearbyServicesComponent,canActivate: [MyGuardGuard]},
    {path:'AdditionalFacility',component:AdditionalFacilityDetailsComponent,canActivate: [MyGuardGuard]},
    {path:'AdminHome',component:HomeComponent,canActivate: [MyGuardGuard]},
    
    {path:'Home',component:UserHomeComponent,canActivate:[UserGuardGuard]},
    {path:'Profile',component:ProfileComponent,canActivate:[UserGuardGuard]},
    {path:'BookFunction',component:HostFunctionComponent,canActivate:[UserGuardGuard]},
    {path:'CheckBook',component:CheckbookedComponent,canActivate:[UserGuardGuard]},
    {path:'Login',component:LoginComponent},

    {path:'',redirectTo:'/Login',pathMatch:'full'},
    { path: '**', component:PageNotFoundComponent},
    
  ];


 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
