import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
