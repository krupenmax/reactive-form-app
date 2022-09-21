import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { MainComponent } from './main/main.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  
  { path: 'register', component: RegistrationComponent },
  { path: '', component: AuthComponent },
  { path: 'main', component: MainComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ LoginGuard ]
})
export class AuthRoutingModule { }
