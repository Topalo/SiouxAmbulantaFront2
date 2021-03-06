import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { PatientAllComponent } from './patient-all/patient-all.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { FirstNamePipe, PatientSearch, LastNamePipe,  } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { HomeComponent } from './home/home.component';
import { CalendarDetailsComponent } from './calendar-details/calendar-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    AppointmentsListComponent,
    PatientAllComponent,
    SignInComponent,
    FirstNamePipe,
    LastNamePipe,
    PatientSearch,
    AppointmentAddComponent,
    HomeComponent,
    CalendarDetailsComponent
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
