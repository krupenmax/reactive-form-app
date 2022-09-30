import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersInfo } from "./users-info";

@Injectable({
  providedIn: "root",
})
export class HttpService {

  public constructor(private http: HttpClient) { }

  public getUsers(userNum: number, currentPage: number): Observable<UsersInfo> {
    return this.http.get<UsersInfo>("api/auth/users?limit=" + userNum + "&skip=" + currentPage * userNum, { withCredentials: true });
  }
}
