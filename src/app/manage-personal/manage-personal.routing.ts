import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ListPersonalComponent } from './list-personal/list-personal.component';
import { AddPersonalComponent } from './add-personal/add-personal.component';
import {SurveyService} from '../shared/services/survey.service';


export const Personal_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListPersonalComponent
      },
 
      
      {
        path: 'add',
        component: AddPersonalComponent
      },
   
    ]
  }
];

/*@NgModule({
  imports: [RouterModule.forChild(Personal_ROUTES)],
  exports: [RouterModule]
})
export class ManagePersonalRoutingModule {
}*/
