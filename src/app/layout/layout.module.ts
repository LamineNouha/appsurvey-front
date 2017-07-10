import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
// Components
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMainNavbarComponent } from './app-main-navbar/app-main-navbar.component';
import { AppMainNavigationComponent } from './app-main-navigation/app-main-navigation.component';
import { AppUsermenuComponent } from './app-usermenu/app-usermenu.component';


@NgModule({
  imports: [
     CommonModule,
     //SharedModule,
     RouterModule
  ],
     exports: [
    AppHeaderComponent,
    AppFooterComponent,
    AppMainNavbarComponent,
    AppMainNavigationComponent,
    AppUsermenuComponent
  ],

  declarations: [ 
    AppHeaderComponent,
    AppFooterComponent,
    AppMainNavbarComponent,
    AppMainNavigationComponent,
    AppUsermenuComponent 
  
    ]
 

})
export class LayoutModule { }