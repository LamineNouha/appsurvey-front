import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
// Components
import { ListQuestionnaireComponent } from './list-questionnaire/list-questionnaire.component';
import {QuestionnaireService} from '../shared/services/questionnaire.service';


@NgModule({
  imports: [
     CommonModule,
     //SharedModule,
     RouterModule
  ],
     exports: [
ListQuestionnaireComponent
  ],

  declarations: [ 
   ListQuestionnaireComponent
  
    ],

    providers:[
        QuestionnaireService

    ]
 

})
export class ManageQuestionnaire { }