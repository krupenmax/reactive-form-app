import { Component, OnInit } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "../auth/data.service";
import { PopUpService } from "../pop-up.service";
import { UserInfo } from "../user-info";

@Component({
  selector: "app-pop-up-window",
  styleUrls: ["./pop-up-window.component.scss"],
  templateUrl: "./pop-up-window.component.html",
})

export class PopUpWindowComponent {
  @Output() public cancelEvent = new EventEmitter<boolean>();
  public user?: Observable<UserInfo> = this.dataService.popUpUser;
  public userId: number = 0;
  public constructor(private dataService: DataService, private popUpService: PopUpService) {

  }

  public cancel(): void {
    this.cancelEvent.emit(false);
  }

  public getIndex(): number {
    return this.userId;
  }

}
