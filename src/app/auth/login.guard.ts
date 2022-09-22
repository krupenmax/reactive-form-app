import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { RegisterService } from "./register.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  public constructor(private loginService: LoginService, private router: Router, private registerService: RegisterService) {}
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<UrlTree | boolean> | Promise<UrlTree | boolean> | UrlTree | boolean {
    if (this.loginService.isLogged === false && this.registerService.isLogged === false) {
      this.router.navigateByUrl("");
    }
    return this.loginService.isLogged || this.registerService.isLogged;
  }

}
