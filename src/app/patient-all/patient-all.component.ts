import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import { AuthService } from '../service/auth.service';
import { Doctor } from '../model/doctor';

@Component({
  selector: 'app-patient-all',
  templateUrl: './patient-all.component.html',
  styleUrls: ['./patient-all.component.sass'],
  providers: [PatientService, AuthService]
})
export class PatientAllComponent implements OnInit {

  items: Patient[];

  constructor(private service: PatientService, private authService: AuthService) {
    this.loadPatients();
    this.me();
  }

  ngOnInit() {
  }

  me() {
    this.authService.me().subscribe(
      (res: Doctor) => {
        console.log(res);
        localStorage.setItem("username", res.username);
      }
    );
  }

  loadPatients() {
    this.service.getPatients().subscribe(
      (res: Patient[]) => {
        this.items = res;
      }
    );

  }
}
