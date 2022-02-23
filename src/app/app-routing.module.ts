import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentComponent} from './state/parent.component';
import {ChildComponent} from './district/child.component';
import {CountryComponent} from './country/country.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
  {path:'register',component: RegistrationComponent},
{path:'state',component: ParentComponent},
{path:'district',component: ChildComponent},
{path:'',component: CountryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

