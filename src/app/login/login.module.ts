import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AUTH_ROUTES } from './login.routing';
import { LoginComponent } from './login.component' 
import { LogoutComponent } from './logout.component' 
@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
     RouterModule.forChild(AUTH_ROUTES)
  ],
  declarations: [
   LoginComponent,
   LogoutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
