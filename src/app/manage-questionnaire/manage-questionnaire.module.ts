import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListQuestionnaireComponent } from './list-questionnaire/list-questionnaire.component';
import { AddQuestionnaireComponent } from './add-questionnaire/add-questionnaire.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListQuestionnaireComponent, AddQuestionnaireComponent]
})
export class ManageQuestionnaireModule { }
