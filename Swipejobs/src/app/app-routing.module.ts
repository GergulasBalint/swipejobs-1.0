import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRegisterComponent } from './_components/register/main-register/main-register.component';
import { MainLoginComponent } from './_components/login/main-login/main-login.component';
import { AppComponent } from './app.component';
import { WelcomePageLayoutComponent } from './_layouts/_components/welcome-page-layout/welcome-page-layout.component';
import { AuthGuardComponentComponent } from './_components/auth-guard-component/auth-guard-component.component';
import { LoggedInMainpageComponent } from './_layouts/_components/logged-in-mainpage-layout/logged-in-mainpage.component';
import { ProfileLayoutComponent } from './_layouts/_components/profile-layout/profile-layout.component';

const routes: Routes = [
  {path:'', component:AuthGuardComponentComponent},
  { path: 'register', component: MainRegisterComponent },
  { path: 'login', component: MainLoginComponent },
  { path: 'welcome', component: WelcomePageLayoutComponent },
  { path: 'dashboard', component: LoggedInMainpageComponent },
  { path: 'profile', component: ProfileLayoutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
