import { Component } from "@angular/core";
import { UserInfo } from "src/app/user-info";
import { DataService } from "../data.service";
import { LoginService } from "../login.service";
import { registerInfo } from "../register-info";

@Component({
  selector: "app-main",
  styleUrls: ["./main.component.scss"],
  templateUrl: "./main.component.html",
})
export class MainComponent  {
  public userInfo?: UserInfo = this.dataService.userInfo;
  public registerUser?: registerInfo = this.dataService.registerUser;
  public constructor(private loginService: LoginService, private dataService: DataService) {
  }
}
