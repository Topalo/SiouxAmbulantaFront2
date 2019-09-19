import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAllComponent } from './patient-all/patient-all.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PatientAddComponent } from './patient-add/patient-add.component';


const routes: Routes = [
  {path: "calender", component: CalenderComponent},
  {path: "patient-list", component: PatientListComponent},
  {path: "patient-all", component: PatientAllComponent},
  {path: "sign-in", component: SignInComponent},
  {path: "patient-add", component: PatientAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
