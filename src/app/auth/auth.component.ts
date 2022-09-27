import { ChangeDetectionStrategy, OnDestroy } from "@angular/core";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { UserInfo } from "../user-info";
import { DataService } from "./data.service";
import { LoginService } from "./login.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  selector: "app-auth",
  styleUrls: ["./auth.component.scss"],
  templateUrl: "./auth.component.html",
})

export class AuthComponent implements OnDestroy{
  public authForm = new FormGroup({
    login: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  public unsubscribe$: Subject<void> = new Subject();

  public constructor(private loginService: LoginService, private router: Router, private dataService: DataService) { }

  public login() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
    }
    else {
      this.loginService.login(this.authForm.controls["login"].value, this.authForm.controls["password"].value).pipe(takeUntil(this.unsubscribe$)).subscribe({
        error: (data) => {
          alert(data.error.message);
        },
        next: (data) => {
          this.loginService.isLogged = true;
          this.dataService.userInfo = {
            birthDate: data.birthDate,
            email: data.email,
            firstName: data.firstName,
            gender: data.gender,
            id: data.id,
            image: data.image,
            lastName: data.lastName,
            password: data.password,
            token: data.token,
            username: data.username,
          };
          this.router.navigateByUrl("main");
        },
      });
    }
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
