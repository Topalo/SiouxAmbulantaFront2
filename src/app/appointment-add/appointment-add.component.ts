import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/patient';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.sass']
})
export class AppointmentAddComponent implements OnInit {

  @Input("item")
  item: Appointment = {id: null, date:'', patient:{id:null, firstname:'',lastname:'',jmbg:''}, doctor:{id:1, firstname:'',lastname:'',
username:'', password:'', email:'', specialization:''}};

  constructor(private service: AppointmentService) { }

  ngOnInit() {
  }

  public clearForm() {
    this.item = {id: null, date:'', patient:{id:null, firstname:'',lastname:'',jmbg:''}, doctor:{id:1, firstname:'',lastname:'',
    username:'', password:'', email:'', specialization:''}};
  }

  public saveAppointment() {
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
