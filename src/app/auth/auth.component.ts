import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "./data.service";
import { LoginService } from "./login.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  selector: "app-auth",
  styleUrls: ["./auth.component.scss"],
  templateUrl: "./auth.component.html",
})

export class AuthComponent {
  public authForm = new FormGroup({
    login: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  public constructor(private loginService: LoginService, private router: Router, private dataService: DataService) { }

  public login(username: string | null | undefined, password: string | null | undefined) {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
    }
    this.loginService.login(username, password).subscribe({
      error: (data) => {
        alert(data.error.message);
      },
      next: (data) => {
        this.loginService.isLogged = true;
        this.dataService.userInfo = {
          email: data.email,
          firstName: data.firstName,
          gender: data.gender,
          id: data.id,
          image: data.image,
          lastName: data.lastName,
          token: data.token,
          username: data.username,
        };
        this.router.navigateByUrl("main");
      },
    });
  }


}
