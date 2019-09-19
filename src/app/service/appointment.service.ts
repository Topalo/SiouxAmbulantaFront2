import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private client: HttpClient) { }


}
