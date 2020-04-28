import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: '**',
    redirectTo: 'calendar',
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
