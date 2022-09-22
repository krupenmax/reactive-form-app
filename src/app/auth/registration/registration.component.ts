import { Component, OnInit } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { validatePassword, validatePhoneNum, validatePlus, validateSimilarity } from "../../my-validator";
import { DataService } from "../data.service";
import { registerInfo } from "../register-info";
import { RegisterService } from "../register.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-registration",
  styleUrls: ["./registration.component.scss"],
  templateUrl: "./registration.component.html",
})

export class RegistrationComponent implements OnInit {
  public isValid = true;
  public isPhoneNumEnabled = true;
  public constructor(private dataService: DataService, private registerService: RegisterService, private router: Router) {
  }

  public registerForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, validatePassword, Validators.minLength(8), Validators.maxLength(64)]),
    passwordReenter: new FormControl("", [Validators.required, validateSimilarity]),
    phoneNum: new FormControl("", [validatePhoneNum, validatePlus, Validators.minLength(10), Validators.maxLength(16)]),
    username: new FormControl("", [Validators.minLength(6), Validators.maxLength(64), Validators.required]),
  });

  public isValidPassword(): boolean {
    this.isValid = false;
    if (this.registerForm.controls["password"].value != this.registerForm.controls["passwordReenter"].value) {
      return true;
    }
    else {
      return false;
    }
  }

  public register(): void {
    let body: registerInfo = {
      email: this.registerForm.controls["email"].value,
      password: this.registerForm.controls["password"].value,
      phoneNum: this.registerForm.controls["phoneNum"].value,
      username: this.registerForm.controls["username"].value,
    };
    console.log(body.phoneNum);
    this.registerService.register(body).subscribe({
      error: (data) => {
        alert(data.error.message);
      },
      next: (data) => {
        this.dataService.registerUser = {
          email: data.email,
          password: data.password,
          phoneNum: data.phoneNum,
          username: data.username,
        };
        this.router.navigateByUrl("main");
      },
    });
  }

  public ngOnInit(): void {
    this.registerForm.valueChanges.subscribe();
  }
}
