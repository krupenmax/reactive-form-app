import { Injectable } from '@angular/core';
import { registerInfo } from './register-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public myObservable: Observable<registerInfo> = new Observable();
  public isLogged: boolean;
  constructor(private http: HttpClient, private router: Router) {
    this.isLogged = false;
   }

  public register(body: registerInfo): Observable<registerInfo> {
    return this.http.post<registerInfo>('/users/add', body);
  }
}
