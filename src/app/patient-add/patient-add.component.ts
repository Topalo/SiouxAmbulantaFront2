import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.sass']
})
export class PatientAddComponent implements OnInit {

  @Input("item")
  item: Patient = {id: null, firstname: '', lastname:'', jmbg:''};

  @Output("onSave")
  onSave: EventEmitter<Patient> = new EventEmitter<Patient>();


  constructor() { }

  ngOnInit() {
  }

  public clearForm() {
    this.item = {id: null, firstname: '', lastname:'', jmbg:''};
  }

  public savePatient() {
    this.onSave.next(this.item);
    this.clearForm();
  }
  
  
}
