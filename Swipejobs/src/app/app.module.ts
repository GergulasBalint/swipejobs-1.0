import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { LoggedInNavbarComponent } from './_components/_dashboard/logged-in-navbar/logged-in-navbar.component';
import { AuthGuardComponentComponent } from './_components/auth-guard-component/auth-guard-component.component';
import { LoggedInMainpageComponent } from './_layouts/_components/logged-in-mainpage-layout/logged-in-mainpage.component';
import { MainComponent } from './_components/_dashboard/main/main.component';
import { ProfileLayoutComponent } from './_layouts/_components/profile-layout/profile-layout.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Error404Component } from './_components/error404/error404.component';
import { Error404LayoutComponent } from './_layouts/_components/error404-layout/error404-layout.component';
import { ClientMainComponent } from './_components/_dashboard/client-main/client-main.component';
import { ClientJobuploadComponent } from './_components/_dashboard/client-jobupload/client-jobupload.component';
import { ClientProfileComponent } from './_components/_dashboard/client-profile/client-profile.component';

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
    LoggedInMainpageComponent,
    MainComponent,
    ProfileLayoutComponent,
    ProfileComponent,
    Error404Component,
    Error404LayoutComponent,
    ClientMainComponent,
    ClientJobuploadComponent,
    ClientProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
