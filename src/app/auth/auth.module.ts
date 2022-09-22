import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginService } from "./login.service";
import { MainComponent } from "./main/main.component";
import { RegistrationComponent } from "./registration/registration.component";


@NgModule({
  bootstrap: [AuthComponent],
  declarations: [AuthComponent, RegistrationComponent, MainComponent],
  imports: [AuthRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [LoginService],
})
export class AuthModule { }
