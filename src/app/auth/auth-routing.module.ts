import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginGuard } from "./login.guard";
import { MainComponent } from "./main/main.component";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [

  { component: RegistrationComponent, path: "register" },
  { component: AuthComponent, path: "" },
  { canActivate: [LoginGuard], component: MainComponent, path: "main" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
  providers: [LoginGuard],
})
export class AuthRoutingModule { }
