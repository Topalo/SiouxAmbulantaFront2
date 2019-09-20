import { Component, OnInit, Input } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html'
})
export class CalenderComponent implements OnInit {

  @Input("appointment")

  date: string="";

  constructor(private appointemntService:AppointmentService) { }

  ngOnInit() {
  }  
}
