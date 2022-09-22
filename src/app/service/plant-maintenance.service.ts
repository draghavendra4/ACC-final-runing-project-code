import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlantM } from '../Model/PlantMaintenance';
import { data } from 'jquery';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlantMaintenanceService {

  URL = "http://localhost:4300";
  splice: any;

  constructor(private http:HttpClient) { }
    getData(){
      return this.http.get(`${this.URL}`+'/plant_maintenance');
    }

    postData(formData:any){
      console.log(formData);
      return this.http.post(`${this.URL}`+'/plant_maintenance', formData);
    }

    putData(formData: any) {
      // debugger;
      // return this.http.put(`${this.URL}` +'/plant_maintenance/' + formData.id, formData);
      let dat =  this.http.put(`${this.URL}/plant_maintenance/${formData.id}`, formData);
      // console.log(dat);
      return dat;

    }

    deleteData(id: any) {
      return this.http.delete(`${this.URL}` + '/plant_maintenance/' + id);
    }

    // updatePutData(formData: any) {
    //   return this.http.post(`${this.URL}` +'/plant_maintenance/', JSON.stringify(data));
    // }

    postsaveAllData(formData: any){
      return this.http.post(`${this.URL}`+'/plant_maintenance', formData);
    }

  
}
