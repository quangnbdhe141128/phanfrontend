import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../appSettings';

const AUTH_API = AppSettings.API_ENDPOINT + 'auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { username: any; password: any }): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username: credentials.username,
        password: credentials.password,
      },
      httpOptions
    );
  }

  register(user: {
    username: any;
    email: any;
    password: any;
    role: any;
    name: any;
    phone: any;
    address: any;
    cardId: any;
    gender: any;
  }): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role,
        name: user.name,
        phone: user.phone,
        address: user.address,
        cardId: user.cardId,
        gender: user.gender,
      },
      httpOptions
    );
  }
}
