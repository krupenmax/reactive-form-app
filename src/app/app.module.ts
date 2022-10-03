import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./auth.interceptor";
import { LoginService } from "./auth/login.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LoginService, {
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
  }],
})
export class AppModule { }
