import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalFacilityDetailsComponent } from './Components/additional-facility-details/additional-facility-details.component';
import { FunctionCategoryComponent } from './Components/function-category/function-category.component';
import { FunctionDetailsComponent } from './Components/function-details/function-details.component';
import { GuardDutyComponent } from './Components/guard-duty/guard-duty.component';
import { HouseComponent } from './Components/house/house.component';
import { NearServiceCategoryComponent } from './Components/near-service-category/near-service-category.component';
import { NearbyServicesComponent } from './Components/nearby-services/nearby-services.component';
import { OwnerComponent } from './Components/owner/owner.component';
import { ParkingDetailsComponent } from './Components/parking-details/parking-details.component';
import { ServiceCategoryComponent } from './Components/service-category/service-category.component';
import { SocietyComponent } from './Components/society/society.component';
import { UserServiceDetailsComponent } from './Components/user-service-details/user-service-details.component';


const routes: Routes = [
  {path:'FunctionCategory',component:FunctionCategoryComponent},
  {path:'FunctionDetails',component:FunctionDetailsComponent},
  {path:'Owner',component:OwnerComponent},
  {path:'NearByServiceCAtegory',component:NearServiceCategoryComponent},
  {path:'House',component:HouseComponent},
  {path:'Society',component:SocietyComponent},
  {path:'Guard',component:GuardDutyComponent},
  {path:'parking',component:ParkingDetailsComponent},
  {path:'servicesCategory',component:ServiceCategoryComponent},
  {path:'UserService',component:UserServiceDetailsComponent},
  {path:'NaerByServices',component:NearbyServicesComponent},
  {path:'AdditionalFacility',component:AdditionalFacilityDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
