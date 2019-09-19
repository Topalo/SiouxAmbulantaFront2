import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  savePatient(item: Appointment) {
    throw new Error("Method not implemented.");
  }

  constructor(private client: HttpClient) { }

  public getAppointments(doctorId: number): Observable<Page<Appointment>> {
    return this.client.get<Page<Appointment>>(`http://localhost:8080/api/appointments/pages/doctor/${doctorId}?page=0&size=50`);
  }

  public saveAppointment(appointment: Appointment): Observable<Appointment> {
    return this.client.post<Appointment>(`http://localhost:8080/api/appointments`, appointment);
  }
}
