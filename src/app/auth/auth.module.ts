import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginService } from './login.service';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AuthComponent, RegistrationComponent, MainComponent
  ],
  imports: [
    AuthRoutingModule, ReactiveFormsModule, CommonModule
  ],
  providers: [LoginService],
  bootstrap: [AuthComponent]
})
export class AuthModule { }