import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Appointment } from '../model/appointment';
import { Action } from '@fullcalendar/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.sass']
})
export class PatientListComponent implements OnInit {
  
 
  items: Appointment[];

  

  constructor() { }

  ngOnInit() {
  }


}
