import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, NgModel } from "@angular/forms";
import { Observable } from "rxjs";
import { UserInfo } from "src/app/user-info";
import { DataService } from "../auth/data.service";
import { registerInfo } from "../auth/register-info";
import { UsersInfo } from "../users-info";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  selector: "app-main",
  styleUrls: ["./main.component.scss"],
  templateUrl: "./main.component.html",
})
export class MainComponent implements OnInit {
  public isPopUp: boolean = false;
  public userNum: number = 10;
  public pageArray: number[] = new Array(10);
  public currentPage: number = 0;
  public userInfo?: UserInfo = this.dataService.userInfo;
  public registerUser?: registerInfo = this.dataService.registerUser;
  public selectControl: FormControl = new FormControl("");
  public users?: Observable<UsersInfo> = this.http.get<UsersInfo>("api/users?limit=" + this.userNum +"&skip=" + this.currentPage * this.userNum);
  public constructor(private dataService: DataService, private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  public popUp(index: number): void {
    this.isPopUp = true;
    this.dataService.id = index;
  }

  public getIndex(): number {
    return this.dataService.id;
  }

  public cancel(): void {
    this.isPopUp = false;
    this.dataService.id = 0;
    this.cdr.detectChanges();
  }

  public ngOnInit() {
    this.selectControl.valueChanges.subscribe(data => {
      this.userNum = data;
      this.users = this.http.get<UsersInfo>("api/users?limit=" + this.userNum +"&skip=0");
      this.pageArray = new Array(100 / this.userNum);
      this.currentPage = 0;
    });
    this.cdr.detectChanges();
  }

  public changePage(pageIndex: number): void {
    this.currentPage = pageIndex;
    this.users = this.http.get<UsersInfo>("api/users?limit=" + this.userNum +"&skip=" + this.currentPage * this.userNum);
    this.cdr.detectChanges();
  }
}
