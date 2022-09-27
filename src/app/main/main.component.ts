import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Observable, map } from "rxjs";
import { UserInfo } from "src/app/user-info";
import { DataService } from "../auth/data.service";
import { LoginService } from "../auth/login.service";
import { registerInfo } from "../auth/register-info";
import { UsersInfo } from "../users-info";

@Component({
  selector: "app-main",
  styleUrls: ["./main.component.scss"],
  templateUrl: "./main.component.html",
})
export class MainComponent  {
  public userInfo?: UserInfo = this.dataService.userInfo;
  public registerUser?: registerInfo = this.dataService.registerUser;
  public users?: Observable<UsersInfo> = this.http.get<UsersInfo>("api/users?limit=10&skip=0&select=id,firstName,lastName,username,password,birthDate");
  public constructor(private dataService: DataService, private http: HttpClient) {
    this.users?.subscribe(data => console.log(data));
  }
}
