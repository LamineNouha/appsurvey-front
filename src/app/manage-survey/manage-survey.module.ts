import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { DetailSurveyComponent } from './detail-survey/detail-survey.component';
import {SharedModule} from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BusyModule, BusyConfig} from 'angular2-busy';
import {RouterModule} from '@angular/router';
import { Survey_ROUTES } from './manage-survey.routing';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(Survey_ROUTES),
    BusyModule,
  ],
  declarations: [
    ListSurveyComponent, 
    AddSurveyComponent,
    DetailSurveyComponent,
  ],
    
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  
})
export class ManageSurveyModule { }
