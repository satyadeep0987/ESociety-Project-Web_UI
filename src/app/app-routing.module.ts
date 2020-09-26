import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionCategoryComponent } from './Components/function-category/function-category.component';
import { FunctionDetailsComponent } from './Components/function-details/function-details.component';
import { HouseComponent } from './Components/house/house.component';
import { NearServiceCategoryComponent } from './Components/near-service-category/near-service-category.component';
import { OwnerComponent } from './Components/owner/owner.component';
import { SocietyComponent } from './Components/society/society.component';

const routes: Routes = [
  {path:'FunctionCategory',component:FunctionCategoryComponent},
  {path:'FunctionDetails',component:FunctionDetailsComponent},
  {path:'Owner',component:OwnerComponent},
  {path:'NearByServiceCAtegory',component:NearServiceCategoryComponent},
  {path:'House',component:HouseComponent},
  {path:'Society',component:SocietyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
