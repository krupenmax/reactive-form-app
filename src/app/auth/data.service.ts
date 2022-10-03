import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInfo } from "../user-info";
import { UsersInfo } from "../users-info";
import { registerInfo } from "./register-info";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public userInfo?: UserInfo;
  public registerUser?: registerInfo;
  public isLogged: boolean = false;
  public users?: Observable<UsersInfo> = new Observable();
  public popUpUser: Observable<UserInfo> = new Observable();

  public getAuthToken(): string | undefined {
    return this.userInfo?.token;
  }

  public constructor() { }
}
