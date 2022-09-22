import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInfo } from "../user-info";
import { registerInfo } from "./register-info";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public userInfo?: UserInfo;
  public registerUser?: registerInfo;

  public constructor() { }
}
