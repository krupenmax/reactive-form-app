import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../auth/user';
import { UserInfo } from '../user-info';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public myObservable: Observable<UserInfo> = new Observable();
  public isLogged: boolean = false;
  constructor(private http: HttpClient, private router: Router) {
   }

  public login(username: string | null | undefined, password: string | null | undefined): void {
    let user: User = { 
      username: username,
      password: password };
    this.myObservable = this.http.post<UserInfo>('/auth/login', user);
    this.myObservable.subscribe({
      next: (v) => {
        this.isLogged = true;
        this.router.navigateByUrl('main');
      },  
      error: (e) => {
        alert("Неверные данные");
      },
      complete: () => {}
  })
    console.log(this.isLogged);
  }

  public isLoggedFunc(): boolean {
    return this.isLogged;
  }
}
