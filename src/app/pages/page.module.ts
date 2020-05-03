import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PageRoutingModule } from './pages-routing.module';

import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    PageRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    WalletComponent,
    ProfileComponent
   ],
  providers:[
    { provide: LOCALE_ID, useValue: 'pt-BR'},
  ]
})
export class PageModule {}
