import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, first, take, takeUntil, Subject } from "rxjs";
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
export class MainComponent implements OnInit, OnDestroy {
  public isPopUp: boolean = false;
  public currentPage: number = 0;
  public userInfo?: UserInfo = this.dataService.userInfo;
  public registerUser?: registerInfo = this.dataService.registerUser;
  public selectControl: FormControl = new FormControl(10);
  public users?: UsersInfo;
  public total = 0;
  public pageArray?: number[];
  public usersObservable?: Observable<UsersInfo>;
  public unsubscribe$: Subject<void> = new Subject();

  public constructor(private dataService: DataService, private cdr: ChangeDetectorRef, private httpService: HttpService) {
    this.usersObservable = this.httpService.getUsers(this.selectControl.value, this.currentPage);
    this.usersObservable?.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (data) => {
        this.users = data;
        this.total = data.total;
        this.total % 10 === 0 ? this.pageArray = new Array(this.total / 10) : this.pageArray = new Array(Math.trunc(this.total / 10) + 1);
        this.cdr.detectChanges();
      },
    });
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
      this.usersObservable = this.httpService.getUsers(data, 0);
      this.usersObservable?.pipe(takeUntil(this.unsubscribe$)).subscribe({
        next: (data) => {
          this.users = data;
          this.total = data.total;
          this.cdr.detectChanges();
        },
      });
      this.total % data === 0 ? this.pageArray = new Array(this.total / data) : this.pageArray = new Array(Math.trunc(this.total / data) + 1);
      this.currentPage = 0;
    });
    this.cdr.detectChanges();
  }

  public changePage(pageIndex: number): void {
    this.currentPage = pageIndex;
    this.usersObservable = this.httpService.getUsers(this.selectControl.value, this.currentPage);
    this.usersObservable?.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (data) => {
        this.users = data;
        this.total = data.total;
        this.cdr.detectChanges();
      },
    });
    this.cdr.detectChanges();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
