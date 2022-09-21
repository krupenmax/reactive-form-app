import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/user-info';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {
  constructor(private loginService: LoginService) {
    this.myObservable = this.loginService.myObservable;
   }
  public myObservable: Observable<UserInfo>;


}
