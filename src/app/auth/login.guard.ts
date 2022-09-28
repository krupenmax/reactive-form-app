import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "./data.service";
import { RegisterService } from "./register.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  public constructor(private router: Router, private registerService: RegisterService, private dataService: DataService) {}
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<UrlTree | boolean> | Promise<UrlTree | boolean> | UrlTree | boolean {
    if (this.dataService.isLogged === false && this.registerService.isLogged === false) {
      this.router.navigateByUrl("");
    }
    return this.dataService.isLogged || this.registerService.isLogged;
  }

}
