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
  

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform{
    transform(patients: Patient[], searchLName: string, searchFName: string): any[] {
    if(patients && patients.length){
        return patients.filter(p => {
            if( searchFName && p.firstname.toLowerCase().indexOf(searchFName.toLowerCase()) === -1){
                return false;
            }
            if( searchLName && p.firstname.toLowerCase().indexOf(searchLName.toLowerCase()) === -1){
                return false;
            }
            return true;
        })
    }
    else {
        return patients;
    }   
    }
  }

 