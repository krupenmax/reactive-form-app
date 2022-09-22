import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/user-info';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';
import { registerInfo } from '../register-info';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {
  public user: Observable<UserInfo>;
  public newUser: Observable<registerInfo>;
  constructor(private loginService: LoginService, private dataService: DataService) {
    this.user = this.dataService.myObservable;
    this.newUser = this.dataService.registerObservable;
  }
}
