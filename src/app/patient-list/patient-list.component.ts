
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../model/appointment';
import { Page } from '../model/page';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.sass'],
  providers: [AppointmentService]
})
export class PatientListComponent implements OnInit {
  
 
  items: Appointment[];

  constructor(private service: AppointmentService) {

    this.loadStudents();

  }

  loadStudents() {
    this.service.getAppointments(1).subscribe(
      (res: Page<Appointment>) => {
        this.items = res.items;
      }
    );
  }

  ngOnInit() {
  }


}
