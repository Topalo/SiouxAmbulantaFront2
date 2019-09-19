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
    return this.client.get<Patient[]>("http://localhost8080/api/patients")
  }

}