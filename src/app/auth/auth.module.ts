import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AuthComponent, RegistrationComponent
  ],
  imports: [
    AuthRoutingModule, ReactiveFormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AuthModule { }