import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/patient';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.sass']
})
export class AppointmentAddComponent implements OnInit {

  @Input("item")
  item: Appointment = {id: null, date:'', patient:0, doctor:1};

  constructor() { }

  ngOnInit() {
  }

}
