import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { RegistrationComponent } from "./registration/registration.component";


@NgModule({
  bootstrap: [AuthComponent],
  declarations: [AuthComponent, RegistrationComponent],
  imports: [AuthRoutingModule, ReactiveFormsModule, CommonModule],
})
export class AuthModule { }
