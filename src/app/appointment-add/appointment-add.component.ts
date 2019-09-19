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
  item: Appointment = {id: null, date:'', patient:{id: 0, firstname: 'ime', lastname:'prezime', jmbg:'666'}, doctor:1};

  constructor() { }

  ngOnInit() {
  }

}
