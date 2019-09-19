import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private client: HttpClient) { }

  public getPatients(): Observable<Patient[]>{
    return this.client.get<Patient[]>("http://localhost:8080/api/patients")
  }
  public savePatient(item: Patient) : Observable<Patient> {
    var url = "http://localhost:8080/api/patients"
    if(item.id) {
      url += `/${item.id}`;
      return this.client.put<Patient>(url, item);
    } else {
      return this.client.post<Patient>(url, item);
    }
  }
}
