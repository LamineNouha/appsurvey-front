import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppDashboardComponent } from './app-dashboard.component';
import { AppStatComponent } from './detail-stat/detail-stat.component';
import { PieChartComponent } from './detail-stat/pie-chart/pie-chart.component';
//import { NgaModule } from '../../theme/nga.module';
import {RouterModule} from '@angular/router';
import { Dashboard_ROUTES } from './dashboard.routing';
import { ChartsModule } from 'ng2-charts/ng2-charts';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Dashboard_ROUTES),
    ChartsModule

  ],
  declarations: [
    AppDashboardComponent,
    AppStatComponent,
    PieChartComponent,
 
  ],
  providers: [
    
  ]
})
export class DashboardModule {}
