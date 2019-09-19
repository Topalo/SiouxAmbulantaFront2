import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/patient';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../service/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../service/patient.service';
import { PatientListComponent } from '../patient-list/patient-list.component';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.sass']
})
export class AppointmentAddComponent implements OnInit {

  @Input("item")
  item: Appointment = {id: null, date:'', patient:{id:1, firstname:'',lastname:'',jmbg:''}, doctor:{id:1, firstname:'',lastname:'',
username:'', password:'', email:'', specialization:''}};

  date: string = "";
  time: string = ""; 
  patient: Patient;

  constructor(private service: AppointmentService, private _Activatedroute:ActivatedRoute, private servicePatient: PatientService) {

    console.log(this._Activatedroute.snapshot.paramMap.get("id"));
   }

  ngOnInit() {
  }

  public getPatient(){
    this.servicePatient.getPatient(this._Activatedroute.snapshot.paramMap.get("id")).subscribe(
      (res: Patient) =>{
        this.patient = res;
      }
    );
  }  

  public clearForm() {
    this.item = {id: null, date:'', patient:{id:null, firstname:'',lastname:'',jmbg:''}, doctor:{id:null, firstname:'',lastname:'',
    username:'', password:'', email:'', specialization:''}};
  }

  public saveAppointment() {
    this.item.date = this.date + " " + this.time;
    this.service.saveAppointment(this.item).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.clearForm();
  }
}
