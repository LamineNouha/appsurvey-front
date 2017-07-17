import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutesModule, routingComponents} from './shared/app.routes.module';
import {QuestionnaireService} from './shared/services/questionnaire.service';
import { RegistrationComponent } from './manage-personal/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegistrationComponent
    
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
