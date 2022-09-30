import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { UserInfo } from "src/app/user-info";
import { DataService } from "../auth/data.service";
import { registerInfo } from "../auth/register-info";
import { HttpService } from "../http.service";
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
  public currentPage: number = 0;
  public userId = 0;
  public userInfo?: UserInfo = this.dataService.userInfo;
  public registerUser?: registerInfo = this.dataService.registerUser;
  public selectControl: FormControl = new FormControl(10);
  public total: number = 0;
  public pageArray: number[] = new Array(10);
  public users?: Observable<UsersInfo> = this.httpService.getUsers(this.userNum, this.currentPage);
  public constructor(private dataService: DataService, private cdr: ChangeDetectorRef, private httpService: HttpService) {
    this.httpService.getUsers(this.userNum, 0).subscribe(data => this.total = data.total);
  }

  public popUp(index: number): void {
    this.isPopUp = true;
    this.userId = index;
  }

  public getIndex(): number {
    return this.userId;
  }

  public cancel(): void {
    this.isPopUp = false;
    this.userId = 0;
    this.cdr.detectChanges();
  }

  public ngOnInit() {
    this.selectControl.valueChanges.subscribe(data => {
      this.userNum = data;
      this.users = this.httpService.getUsers(this.userNum, 0);
      this.total % this.userNum === 0 ? this.pageArray = new Array(this.total / this.userNum) : this.pageArray = new Array(Math.trunc(this.total / this.userNum) + 1);
      this.currentPage = 0;
    });
    this.cdr.detectChanges();
  }

  public changePage(pageIndex: number): void {
    this.currentPage = pageIndex;
    this.users = this.httpService.getUsers(this.userNum, this.currentPage);
    this.cdr.detectChanges();
  }
}
