import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutesModule, routingComponents} from './app.routes.module';
import {QuestionnaireService} from './shared/services/questionnaire.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutesModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [QuestionnaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
