import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppDashboardComponent } from './app-dashboard.component';
import { AppStatComponent } from './detail-stat/detail-stat.component';


export const Dashboard_ROUTES: Routes = [
    {path:'', component:AppDashboardComponent},
    {
      path: ':surveyId/detail',
      component: AppStatComponent
    },
];

/*@NgModule({
  imports: [RouterModule.forChild(Personal_ROUTES)],
  exports: [RouterModule]
})
export class ManagePersonalRoutingModule {
}*/
