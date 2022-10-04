import { ChangeDetectionStrategy, OnDestroy } from "@angular/core";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { DataService } from "./data.service";
import { LoginService } from "./login.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-auth",
  styleUrls: ["./auth.component.scss"],
  templateUrl: "./auth.component.html",
})

export class AuthComponent implements OnDestroy{
  public authForm = new FormGroup({
    login: new FormControl("kminchelle", Validators.required),
    password: new FormControl("0lelplR", Validators.required),
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
          this.dataService.isLogged = true;
          this.dataService.userInfo = {
            age: data.age,
            birthDate: data.birthDate,
            email: data.email,
            firstName: data.firstName,
            gender: data.gender,
            height: data.height,
            id: data.id,
            image: data.image,
            lastName: data.lastName,
            password: data.password,
            token: data.token,
            username: data.username,
            weight: data.weight,
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
