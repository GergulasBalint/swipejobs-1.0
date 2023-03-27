import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRegisterComponent } from './_components/register/main-register/main-register.component';
import { MainLoginComponent } from './_components/login/main-login/main-login.component';
import { AppComponent } from './app.component';
import { WelcomePageLayoutComponent } from './_layouts/_components/welcome-page-layout/welcome-page-layout.component';
const routes: Routes = [
  {path:'', component:WelcomePageLayoutComponent},
  { path: 'register', component: MainRegisterComponent },
  { path: 'login', component: MainLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
