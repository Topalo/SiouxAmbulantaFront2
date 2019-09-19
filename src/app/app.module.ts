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

import { FirstNamePipe, PatientSearch } from './pipes/filter.pipe';
import { FormsModule }   from '@angular/forms';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    PatientListComponent,
    PatientAllComponent,
    SignInComponent,
    PatientAddComponent,
    FirstNamePipe,
    PatientSearch,
    AppointmentAddComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
