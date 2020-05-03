import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [ 
    { path: 'profile', component: ProfileComponent },
    { path: 'wallet', component: WalletComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
