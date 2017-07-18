import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuestionnaireComponent } from '../manage-questionnaire/list-questionnaire/list-questionnaire.component';
import { AddQuestionnaireComponent } from '../manage-questionnaire/add-questionnaire/add-questionnaire.component';
import { AddPersonnelComponent } from '../manage-personnel/add-personnel/add-personnel.component';
import { ListPersonnelComponent } from '../manage-personnel/list-personnel/list-personnel.component';
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'questionnaires', component: ListQuestionnaireComponent ,pathMatch: 'full'},
  { path: 'questionnaires/add', component: AddQuestionnaireComponent },
  { path: 'personnels/add', component: AddPersonnelComponent },
  { path: 'personnels', component: ListPersonnelComponent },
   // { path: 'questionnaires/questionnaires', redirectTo: '/questionnaires', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutesModule {}
export const routingComponents = [ListQuestionnaireComponent, AddQuestionnaireComponent, AddPersonnelComponent, ListPersonnelComponent];
  