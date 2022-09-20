import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  
  {path: 'register', component: RegistrationComponent},
  {path: '', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
