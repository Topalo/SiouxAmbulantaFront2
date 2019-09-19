
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../model/appointment';
import { Page } from '../model/page';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.sass'],
  providers: [AppointmentService, PatientService]
})
export class PatientListComponent implements OnInit {
  
  
  items: Appointment[];
  

  constructor(private service: AppointmentService, private servicePatient: PatientService) {

    this.loadAppointments();

  }

  loadAppointments() {
    this.service.getAppointments(1).subscribe(
      (res: Page<Appointment>) => {
        this.items = res.items;
      }
    );
  }

  ngOnInit() {
  }

  delete(id: number){
      this.servicePatient.deletePatient(id).subscribe(
         
      );
    }
    
}
