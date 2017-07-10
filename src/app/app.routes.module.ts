import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListQuestionnaireComponent } from './manage-questionnaire/list-questionnaire/list-questionnaire.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'questionnaires', component: ListQuestionnaireComponent },
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
export const routingComponents = [ListQuestionnaireComponent];
  