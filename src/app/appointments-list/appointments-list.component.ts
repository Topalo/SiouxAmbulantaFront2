
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../model/appointment';
import { Page } from '../model/page';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './appointments-list.component.html',
  providers: [AppointmentService, PatientService]
})
export class AppointmentsListComponent implements OnInit {

  items: Appointment[];
  pageCount: number;
  pages: string[] = [];

  constructor(private service: AppointmentService, private servicePatient: PatientService) {
    this.loadAppointments("0");
  }

  ngOnInit() {
  }

  loadAppointments(page) {
    page == -1 ? page = this.pageCount - 1 : page = page;
    this.service.getAppointments(localStorage.getItem("username"), page.toString()).subscribe(
      (res: Page<Appointment>) => {
        this.pages = [];
        this.pageCount = Math.ceil(res.totalItems / res.itemsPerPage)
        for (let i = 0; i < this.pageCount; i++) {
          this.pages.push(i.toString());
        }
        this.items = res.items;
      }
    );
  }

  delete(id: number) {
    this.servicePatient.deletePatient(id).subscribe(
      () => {
        this.loadAppointments("0");
      }
    );
  }

}
