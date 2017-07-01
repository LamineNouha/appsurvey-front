import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMainNavbarComponent } from './components/app-main-navbar/app-main-navbar.component';
import { AppMainNavigationComponent } from './components/app-main-navigation/app-main-navigation.component';
import { AppUsermenuComponent } from './components/app-usermenu/app-usermenu.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMainNavbarComponent,
    AppMainNavigationComponent,
    AppUsermenuComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
