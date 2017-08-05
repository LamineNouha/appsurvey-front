import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListPersonalComponent } from './list-personal/list-personal.component';
import { AddPersonalComponent } from './add-personal/add-personal.component';
import {SharedModule} from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { Personal_ROUTES } from './manage-personal.routing';
@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
     RouterModule.forChild(Personal_ROUTES)
  ],
  declarations: [
    ListPersonalComponent, 
    AddPersonalComponent  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagePersonalModule { }
