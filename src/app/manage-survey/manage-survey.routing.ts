import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import {SurveyService} from '../shared/services/survey.service';


export const Survey_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListSurveyComponent
      },
 
      
      {
        path: 'add',
        component: AddSurveyComponent
      },

       {
        path: ':surveyId/edit',
        component: AddSurveyComponent
      },
   
    ]
  }
];

/*@NgModule({
  imports: [RouterModule.forChild(Survey_ROUTES)],
  exports: [RouterModule]
})
export class ManageSurveyRoutingModule {
}*/
