import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { PageRoutingModule } from './pages-routing.module';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    PageRoutingModule,
    MatFormFieldModule,
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
