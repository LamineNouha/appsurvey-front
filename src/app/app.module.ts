import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutesModule, routingComponents} from './shared/app.routes.module';
import {QuestionnaireService} from './shared/services/questionnaire.service';
import { AddPersonnelComponent } from './manage-personnel/add-personnel/add-personnel.component';
import { ListPersonnelComponent } from './manage-personnel/list-personnel/list-personnel.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddPersonnelComponent,
    ListPersonnelComponent
    
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
