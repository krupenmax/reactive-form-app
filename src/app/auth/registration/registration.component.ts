import { Component } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { validatePasswordNum, validatePasswordUppercase, validatePhoneNum, validatePlus, validateSimilarity } from "../../my-validator";
import { DataService } from "../data.service";
import { registerInfo } from "../register-info";
import { RegisterService } from "../register.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-registration",
  styleUrls: ["./registration.component.scss"],
  templateUrl: "./registration.component.html",
})

export class RegistrationComponent {
  public constructor(private dataService: DataService, private registerService: RegisterService, private router: Router) {
  }

  public registerForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, validatePasswordNum, Validators.minLength(8), Validators.maxLength(64), validatePasswordUppercase]),
    passwordReenter: new FormControl("", [Validators.required]),
    phoneNum: new FormControl("", [validatePhoneNum, validatePlus, Validators.minLength(10), Validators.maxLength(16)]),
    username: new FormControl("", [Validators.minLength(6), Validators.maxLength(64), Validators.required]),
  }, { validators: validateSimilarity });

  public register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    }
    else {
      let body: registerInfo = {
        email: this.registerForm.controls["email"].value,
        password: this.registerForm.controls["password"].value,
        phoneNum: this.registerForm.controls["phoneNum"].value,
        username: this.registerForm.controls["username"].value,
      };
      this.registerService.register(body).subscribe({
        error: (data) => {
          alert(data.error.message);
        },
        next: (data) => {
          this.registerService.isLogged = true;
          this.dataService.registerUser = {
            email: data.email,
            password: data.password,
            phoneNum: data.phoneNum,
            username: data.username,
          };
          this.router.navigateByUrl("");
        },
      });
    }
  }
}
