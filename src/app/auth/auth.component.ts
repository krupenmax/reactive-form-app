import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [LoginService]
})
export class AuthComponent {
  authForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  constructor(private loginService: LoginService) { }

  public login(username: string | null | undefined, password: string | null | undefined) {
    this.loginService.login(username, password);
  }


}
