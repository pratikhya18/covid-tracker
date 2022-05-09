import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentComponent} from './state/parent.component';
import {ChildComponent} from './district/child.component';
import {CountryComponent} from './country/country.component';
import {RegistrationComponent} from './registration/registration.component';
import { TestComponent } from './test/test.component';
import { TestpComponent } from './testp/testp.component';
import {DistrictDashboardComponent} from './district-dashboard/district-dashboard.component'
import { LoginComponent } from './login/login.component';
import { StateDashboardComponent } from './state-dashboard/state-dashboard.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'useres/register', pathMatch: 'full'
  }, 
{path:'state',component: ParentComponent},
{path:'district',component: ChildComponent},
{path:'country',component: CountryComponent},
{path:'districtdashboard',component: DistrictDashboardComponent},
// {path:'test',component: TestComponent},
// {path: '', redirectTo:'/test', pathMatch:'full'},        
{path:'test1',component: TestpComponent},
{path:'login',component:LoginComponent},
{path:'statedashboard',component:StateDashboardComponent},
{
  path: 'useres',
  loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

