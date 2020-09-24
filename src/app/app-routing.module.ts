import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionCategoryComponent } from './Components/function-category/function-category.component';
import { FunctionDetailsComponent } from './Components/function-details/function-details.component';

const routes: Routes = [
  {path:'FunctionCategory',component:FunctionCategoryComponent},
  {path:'FunctionDetails',component:FunctionDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
