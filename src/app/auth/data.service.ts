import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../user-info';
import { registerInfo } from './register-info';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public myObservable: Observable<UserInfo> = new Observable();
  public registerObservable: Observable<registerInfo> = new Observable();

  constructor() { }
}
