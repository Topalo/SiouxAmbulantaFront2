import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private client: HttpClient) { }



  public getAppointments(doctorId: number){
    return this.client.get(`http://localhost:8080/api/appointments/pages/doctor/${doctorId}?page=0&size=50`);
  }
}
