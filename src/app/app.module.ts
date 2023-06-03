import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './component/menu/menu.component';
import { LogoutComponent } from './component/logout/logout.component';
import { HttpInterceptorService } from './httpInterceptor.service';
import { AuthGuard } from './auth/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './component/alert/alert.component';
import { AuthorizeComponent } from './component/authorize/authorize.component';
import { AuthcompGuard } from './auth/authcomp.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    AlertComponent,
    LogoutComponent,
    AuthorizeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    AuthGuard,
    AuthcompGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
