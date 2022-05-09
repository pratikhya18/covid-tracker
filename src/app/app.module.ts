import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentComponent } from './state/parent.component';
import { ChildComponent } from './district/child.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CountryComponent } from './country/country.component';
import { NavComponent } from './nav/nav.component';
// import { RegistrationComponent } from './registration/registration.component';

import { HttpClientModule } from '@angular/common/http';
import { Pipe1Pipe } from './pipes/pipe1.pipe';
import { TestComponent } from './test/test.component';
import { TestpComponent } from './testp/testp.component';
import { TestService } from 'service/test.service';
import { DistrictDashboardComponent } from './district-dashboard/district-dashboard.component';
import { LoginComponent } from './login/login.component';
import { StateDashboardComponent } from './state-dashboard/state-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CountryComponent,
    NavComponent,
    
    Pipe1Pipe,
    TestComponent,
    TestpComponent,
    DistrictDashboardComponent,
    LoginComponent,
    StateDashboardComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
