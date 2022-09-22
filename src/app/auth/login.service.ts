import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../auth/user";
import { UserInfo } from "../user-info";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public myObservable: Observable<UserInfo> = new Observable();
  public isLogged: boolean = false;
  public constructor(private http: HttpClient, private router: Router) {
  }

  public login(username: string | null | undefined, password: string | null | undefined): Observable<UserInfo> {
    let user: User = {
      password: password,
      username: username,
    };
    this.isLogged = true;
    return this.http.post<UserInfo>("/auth/login", user);
  }
}
