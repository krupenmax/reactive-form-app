import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MainComponent } from "../main/main.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginGuard } from "./login.guard";
import { LoginService } from "./login.service";
import { RegistrationComponent } from "./registration/registration.component";


@NgModule({
  bootstrap: [AuthComponent],
  declarations: [AuthComponent, RegistrationComponent],
  imports: [AuthRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [LoginGuard, LoginService],
})
export class AuthModule { }
