import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient-all',
  templateUrl: './patient-all.component.html',
  styleUrls: ['./patient-all.component.sass'],
  providers: [PatientService]
})
export class PatientAllComponent implements OnInit {

items: Patient[];

  constructor(private service: PatientService) { 
    this.loadPatients();
  }

  ngOnInit() {
  }

  loadPatients(){
    this.service.getPatients().subscribe(
      (res: Patient[]) =>{
        this.items = res;
      }
    );
   
  }
}
