import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private client: HttpClient) { }

  public getPatients(): Observable<Patient[]> {
    return this.client.get<Patient[]>("http://localhost:8080/api/patients", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  public savePatient(patient: Patient): Observable<Patient> {
    return this.client.post<Patient>("http://localhost:8080/api/patients", patient, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  public getPatient(id: string): Observable<Patient> {
    return this.client.get<Patient>("http://localhost:8080/api/patients/" + id, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  public deletePatient(id: number) {
    return this.client.delete("http://localhost:8080/api/appointments/" + id, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

}
