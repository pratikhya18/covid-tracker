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
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CountryComponent,
    NavComponent,
    RegistrationComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
