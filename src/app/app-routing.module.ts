import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { PatientAllComponent } from './patient-all/patient-all.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "calender", component: CalenderComponent },
  { path: "appointments", component: AppointmentsListComponent },
  { path: "patient-all", component: PatientAllComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "patient-add", component: PatientAddComponent },
  { path: "appointment-add/:id", component: AppointmentAddComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
