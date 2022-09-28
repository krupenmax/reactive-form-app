import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { registerInfo } from "./register-info";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  public isLogged: boolean = false;
  public constructor(private http: HttpClient) {
  }

  public register(body: registerInfo): Observable<registerInfo> {
    return this.http.post<registerInfo>("/api/users/add", body);
  }
}
