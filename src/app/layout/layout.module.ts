import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
// Components
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

//import { FullLayoutComponent } from './full-layout.component';


@NgModule({
  imports: [
     CommonModule,
     //SharedModule,
     RouterModule
  ],
     exports: [
    AppHeaderComponent,
    AppFooterComponent,
   
    //FullLayoutComponent
  ],

  declarations: [ 
    AppHeaderComponent,
    AppFooterComponent,
  
    //FullLayoutComponent 
  
    ]
 

})
export class LayoutModule { }