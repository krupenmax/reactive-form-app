import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginGuard } from './login.guard';
import { DataService } from './data.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [LoginService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  authForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  
  constructor(private loginService: LoginService, private cdr: ChangeDetectorRef, private router: Router, private guard: LoginGuard, private dataService: DataService) { }

  public login(username: string | null | undefined, password: string | null | undefined) {
    this.dataService.myObservable = this.loginService.login(username, password);
    let check = "";
    this.dataService.myObservable.subscribe({
      next: (v) => {
        this.guard.isLogged = true;
        this.router.navigateByUrl('main');
      },  
      error: (e) => {
        alert("Invalid login or password");
      },
      complete: () => {}
    });
  }


}
