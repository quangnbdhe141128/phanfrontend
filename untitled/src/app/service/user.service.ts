import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../dto/user';
import {AppSettings} from '../appSettings';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = AppSettings.API_ENDPOINT + "users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`
    );
  }
}
