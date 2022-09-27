import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Observable, map } from "rxjs";
import { UserInfo } from "src/app/user-info";
import { DataService } from "../auth/data.service";
import { LoginService } from "../auth/login.service";
import { registerInfo } from "../auth/register-info";

@Component({
  selector: "app-main",
  styleUrls: ["./main.component.scss"],
  templateUrl: "./main.component.html",
})
export class MainComponent  {
  public userInfo?: UserInfo = this.dataService.userInfo;
  public registerUser?: registerInfo = this.dataService.registerUser;
  public users?: Observable<UserInfo> = this.http.get<UserInfo>("api/users/1");
  public constructor(private dataService: DataService, private http: HttpClient) {
  }
}
