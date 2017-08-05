import {Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {LogoutComponent} from './logout.component';

export const AUTH_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
];