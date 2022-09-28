import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { DataService } from "./auth/data.service";
import { UserInfo } from "./user-info";
import { UsersInfo } from "./users-info";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public constructor(private dataService: DataService) {}

  public intercept(request: HttpRequest<UserInfo | UsersInfo>, next: HttpHandler): Observable<HttpEvent<UserInfo | UsersInfo>> {
    return next.handle(this.addAuthToken(request));
  }

  public addAuthToken(request: HttpRequest<UserInfo | UsersInfo>) : HttpRequest<UserInfo | UsersInfo> {
    const token = this.dataService.getAuthToken();
    if (request.withCredentials) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return request;
  }
}
