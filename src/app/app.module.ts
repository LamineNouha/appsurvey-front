import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
//import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./app.routing";
//import {AuthService} from "./shared/services/auth.service";
//import {CanActivateViaAuthGuard} from "./shared/services/guards/auth-guard.service";
import {StorageService} from "./shared/services/storage.service";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { LayoutModule } from './layout/layout.module';
import { FullLayoutComponent } from './layout/full-layout.component';
import {SurveyService} from './shared/services/survey.service';
import {PersonalService} from './shared/services/personal.service';
import {AuthService} from './shared/services/auth.service';
import {QuestionService} from './shared/services/question.service';
import {ResponseService} from './shared/services/response.service';
import { AuthModule} from './login/login.module';
import { ManagePersonalModule} from './manage-personal/manage-personal.module';
import { DashboardModule} from './dashboard/dashboard.module';
import { ManageSurveyModule} from './manage-survey/manage-survey.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from "./app.routing";
import {LaddaModule} from "angular2-ladda";
import { SurveyStatsService } from "app/shared/services/survey-stats.service";
//import {LaddaModule} from "angular2-ladda";
//import {BusyModule, BusyConfig} from 'angular2-busy';



@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent
    
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    ManagePersonalModule,
    ManageSurveyModule,
   
    AuthModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: true}),
    LaddaModule,
    DashboardModule,
     
  ],
  providers: [SurveyService,
              PersonalService,
              PersonalService,
              AuthService,
              QuestionService,
              ResponseService,
              SurveyStatsService
              
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
