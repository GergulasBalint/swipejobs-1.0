import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBackgroundComponent } from './_components/welcome_page/main-background/main-background.component';
import { MainDescriptionComponent } from './_components/welcome_page/main-description/main-description.component';
import { NavbarComponent } from './_components/welcome_page/navbar/navbar.component';
import { FooterComponent } from './_components/welcome_page/footer/footer.component';
import { MainRegisterComponent } from './_components/register/main-register/main-register.component';
import { MainLoginComponent } from './_components/login/main-login/main-login.component';
import { WelcomePageLayoutComponent } from './_layouts/_components/welcome-page-layout/welcome-page-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInNavbarComponent } from './_components/logged-in-navbar/logged-in-navbar.component';
import { AuthGuardComponentComponent } from './_components/auth-guard-component/auth-guard-component.component';
import { LoggedInMainpageComponent } from './_layouts/_components/logged-in-mainpage/logged-in-mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBackgroundComponent,
    MainDescriptionComponent,
    NavbarComponent,
    FooterComponent,
    MainRegisterComponent,
    MainLoginComponent,
    WelcomePageLayoutComponent,
    LoggedInNavbarComponent,
    AuthGuardComponentComponent,
    LoggedInMainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
