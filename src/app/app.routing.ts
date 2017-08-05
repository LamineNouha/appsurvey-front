import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Layouts
import {FullLayoutComponent} from "./layout/full-layout.component";
import {LoginComponent} from "./login/login.component";

export const APP_ROUTES: Routes = [
  {path: '',
  component: FullLayoutComponent,
  children: [
      {path: 'survey', loadChildren: "./manage-survey/manage-survey.module#ManageSurveyModule"},
      {path: 'personal', loadChildren: "./manage-personal/manage-personal.module#ManagePersonalModule"},

  ],
 
},
  {path: 'auth', loadChildren: './login/login.module#AuthModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES),],
  exports: [RouterModule,]
})

export class AppRoutingModule {}
//export const routingComponents = [ListQuestionnaireComponent, AddQuestionnaireComponent, AddPersonnelComponent, ListPersonnelComponent];
  