import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PageRoutingModule } from './pages-routing.module';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    ProfileComponent
   ],
  providers:[
    { provide: LOCALE_ID, useValue: 'pt-BR'},
  ]
})
export class PageModule {}
