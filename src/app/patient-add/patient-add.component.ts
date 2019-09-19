import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.sass']
})
export class PatientAddComponent implements OnInit {

  @Input("item")
  item: Patient = { id: null, firstname: '', lastname: '', jmbg: '' };


  constructor(private service: PatientService) { }

  ngOnInit() {
  }

  public clearForm() {
    this.item = { id: null, firstname: '', lastname: '', jmbg: '' };
  }

  public savePatient() {
    this.service.savePatient(this.item).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.clearForm();
  }


}
