import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../appSettings';

const API_URL = AppSettings.API_ENDPOINT + 'test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getCustomerBoard(): Observable<any> {
    return this.http.get(API_URL + 'customer', { responseType: 'text' });
  }

  getRentalBoard(): Observable<any> {
    return this.http.get(API_URL + 'rental', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
