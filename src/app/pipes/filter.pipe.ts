import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../model/patient';

@Pipe({ name: 'filterFirstName'})

export class FirstNamePipe implements PipeTransform {
    transform(patients: Patient[], searchFName: string): any[] {
      if(!patients) return [];
      if(!searchFName) return patients;
      searchFName = searchFName.toLowerCase();
      return patients.filter( p => {
        return p.firstname.toLowerCase().includes(searchFName);
      });
     }
  }
  

@Pipe({name: 'filterLastName'})
export class LastNamePipe implements PipeTransform{
    transform(patients: Patient[], searchLName: string): any[] {
    if(!patients) return [];
    if(!searchLName) return patients;
    searchLName = searchLName.toLowerCase();
    return patients.filter( p => {
        return p.lastname.includes(searchLName);
        });
    }
  }