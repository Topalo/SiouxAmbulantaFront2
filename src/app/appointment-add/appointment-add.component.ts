import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/patient';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../service/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../service/patient.service';

@Component({ selector: 'app-appointment-add', templateUrl: './appointment-add.component.html' })
export class AppointmentAddComponent implements OnInit {

  @Input("item")
  item: Appointment = {
    id: null, date: '', patient: { id: null, firstname: '', lastname: '', jmbg: '' }, doctor: {
      id: 1, firstname: '', lastname: '',
      username: '', password: '', email: '', specialization: ''
    }
  };

  date: string = "";
  time: string = "";
  patient: Patient = { id: null, firstname: '', lastname: '', jmbg: '' };

  constructor(private service: AppointmentService, private _Activatedroute: ActivatedRoute, private servicePatient: PatientService) {
    this.getPatient();
  }

  ngOnInit() {
  }

  public getPatient() {
    this.servicePatient.getPatient(this._Activatedroute.snapshot.paramMap.get("id")).subscribe(
      (res: Patient) => {
        this.patient = res;
        this.item.patient = res;
      }
    );
  }

  public clearForm() {
    this.item = {
      id: null, date: '', patient: { id: null, firstname: '', lastname: '', jmbg: '' }, doctor: {
        id: null, firstname: '', lastname: '',
        username: '', password: '', email: '', specialization: ''
      }
    };
  }

  public saveAppointment() {
    this.item.patient.id = parseInt(this._Activatedroute.snapshot.paramMap.get("id"));
    this.item.doctor.username = localStorage.getItem("username");
    this.item.date = this.date + 'T' + this.time + ':00';
    this.service.saveAppointment(this.item).subscribe(
      (data) => {
        console.log("save appointment");
        console.log(data);
      },
      (error) => {
        console.log("save appointment");
        console.log(error);
      }
    );
    this.clearForm();
  }
}
