import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBackgroundComponent } from './_components/welcome_page/main-background/main-background.component';
import { MainDescriptionComponent } from './_components/welcome_page/main-description/main-description.component';
import { NavbarComponent } from './_components/welcome_page/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBackgroundComponent,
    MainDescriptionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
