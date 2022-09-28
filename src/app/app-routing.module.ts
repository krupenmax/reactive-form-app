import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./auth/login.guard";
import { LoginService } from "./auth/login.service";

const routes: Routes = [

  { loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule), path: "" },
  { canActivate: [LoginGuard], loadChildren: () => import("./main/main.module").then(m => m.MainModule), path: "main" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [LoginGuard],
})
export class AppRoutingModule { }
