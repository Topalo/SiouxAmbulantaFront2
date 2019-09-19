import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAllComponent } from './patient-all/patient-all.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { PatientAddComponent } from './patient-add/patient-add.component';

import { FirstNamePipe } from './pipes/filter.pipe';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    PatientListComponent,
    PatientAllComponent,
    SignInComponent,
    PatientAddComponent,
    FirstNamePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
