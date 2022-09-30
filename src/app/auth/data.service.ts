import { Injectable } from "@angular/core";
import { UserInfo } from "../user-info";
import { registerInfo } from "./register-info";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public userInfo?: UserInfo;
  public registerUser?: registerInfo;
  public isLogged: boolean = false;

  public getAuthToken(): string | undefined {
    return this.userInfo?.token;
  }

  public constructor() { }
}
