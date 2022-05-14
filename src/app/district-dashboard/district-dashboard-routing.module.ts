import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictDashboardComponent } from './district-dashboard.component';
const routes: Routes = [{path:'districtdashboard',component: DistrictDashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictDashboardRoutingModule { }
