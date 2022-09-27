import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "../main/main.component";
import { AuthComponent } from "./auth.component";
import { LoginGuard } from "./login.guard";
import { LoginService } from "./login.service";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [

  { component: RegistrationComponent, path: "register" },
  { component: AuthComponent, path: "" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
  providers: [LoginGuard, LoginService],
})
export class AuthRoutingModule { }
