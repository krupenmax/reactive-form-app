import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, first, take } from "rxjs";
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
  public currentPage: number = 0;
  public userInfo?: UserInfo = this.dataService.userInfo;
  public registerUser?: registerInfo = this.dataService.registerUser;
  public selectControl: FormControl = new FormControl(10);
  public total: number = 100;
  public pageArray: number[] = new Array(10);
  public users?: Observable<UsersInfo> = this.httpService.getUsers(this.selectControl.value, this.currentPage);
  public constructor(private dataService: DataService, private cdr: ChangeDetectorRef, private httpService: HttpService) {
    this.users?.pipe(
      take(1),
    ).subscribe();
    this.dataService.users = this.users;
  }

  public popUp(index: number): void {
    this.isPopUp = true;
    this.dataService.popUpUser = this.httpService.getUser(index);
  }

  public cancel(): void {
    this.isPopUp = false;
    this.cdr.detectChanges();
  }

  public ngOnInit() {
    this.selectControl.valueChanges.subscribe(data => {
      this.users = this.httpService.getUsers(data, 0);
      this.total % data === 0 ? this.pageArray = new Array(this.total / data) : this.pageArray = new Array(Math.trunc(this.total / data) + 1);
      this.currentPage = 0;
    });
    this.cdr.detectChanges();
  }

  public changePage(pageIndex: number): void {
    this.currentPage = pageIndex;
    this.users = this.httpService.getUsers(this.selectControl.value, this.currentPage);
    this.cdr.detectChanges();
  }
}
