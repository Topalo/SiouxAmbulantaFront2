import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';
import { Jwt } from '../model/jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient) { }

  public signIn(doctor: Doctor): Observable<Jwt> {
    return this.client.post<Jwt>("http://localhost:8080/api/auth/login", doctor);
  }

  public me(): Observable<Doctor> {
    return this.client.get<Doctor>("http://localhost:8080/api/auth/me", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

}
