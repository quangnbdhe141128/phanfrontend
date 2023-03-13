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
export class HomeService {

  constructor(private http: HttpClient) {
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL + "booking/view", data, httpOptions);
  }

}


