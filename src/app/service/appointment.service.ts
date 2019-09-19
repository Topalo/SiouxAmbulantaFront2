import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private client: HttpClient) { }

  public getVehiclePage(filter: string="", page: number | null = null) : Observable<Page<Patient>>{
    var options = {parms: {}};
    if(page !== null){
      options["parms"]["page"] = ""+(page-1);
    }
    if(filter !== null){
      options["parms"]["name"] = filter;
    }
    return this.client.get<Page<Patient>>("http://localhost:8080/api/vehicles");
  }
  public save(item: Patient) : Observable<Patient>{
    var url = "http://localhost:8080/api/vehicles";
    if(item.id){
      url += `/${item.id}`;
      return this.client.put<Patient>(url, item);
    }else{
      return this.client.post<Patient>(url,item);
    }
  }
  public delete(id: number){
    return this.client.delete(`http://localhost:8080/api/vehicles/${id}`);
  }
}
