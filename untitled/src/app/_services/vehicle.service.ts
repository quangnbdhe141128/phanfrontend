import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppSettings} from "../appSettings";

const API_URL = AppSettings.API_ENDPOINT + 'anonymous/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {
  }

  getTypeVehicleList(data:any): Observable<any>{
    return this.http.get<any>(API_URL + "vehicle/type", data);
  }
  getSeatVehicleList(data:any): Observable<any>{
    return this.http.get<any>(API_URL + "vehicle/seat", data);
  }
  getCompanyVehicleList(data:any): Observable<any>{
    return this.http.get<any>(API_URL + "vehicle/company", data);
  }
  getFuelVehicleList(data:any): Observable<any>{
    return this.http.get<any>(API_URL + "vehicle/fuel", data);
  }
  getShopVehicleList(data:any): Observable<any>{
    return this.http.get<any>(API_URL + "vehicle/shop", data);
  }
  getVehicleDetail(data:any,id:any): Observable<any>{
    return this.http.get<any>(API_URL + "vehicle/details/"+id, data);
  }
  createForm(data: any): Observable<any> {
    return this.http.post(API_URL + 'booking', data, httpOptions);
  }
  postData(payload: any) {
    return this.http.post<any>('booking/view', payload);
  }
  getBookingDetail(data:any,id:any): Observable<any>{
    return this.http.get<any>(API_URL + "booking/"+id, data);
  }
}


