import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import { AuthService } from '../service/auth.service';
import { Doctor } from '../model/doctor';

@Component({
  selector: 'app-patient-all',
  templateUrl: './patient-all.component.html',
  providers: [PatientService, AuthService]
})
export class PatientAllComponent implements OnInit {

  items: Patient[];
  @Input("item")
  item: Patient = { id: null, firstname: '', lastname: '', jmbg: '' };

  constructor(private service: PatientService, private authService: AuthService) {
    this.loadPatients();
    this.me();
  }

  ngOnInit() {
  }

  me() {
    this.authService.me().subscribe(
      (res: Doctor) => {
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

  public clearForm() {
    this.item = { id: null, firstname: '', lastname: '', jmbg: '' };
  }

  public savePatient() {
    this.service.savePatient(this.item).subscribe(
      (data) => {
        console.log("save patient");
        console.log(data);
      },
      (error) => {
        console.log("save patient error");
        console.log(error);
      }
    );
    this.clearForm();
  }
}
