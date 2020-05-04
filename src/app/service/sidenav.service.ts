import { Injectable } from '@angular/core';

import { SideNavModel } from '../model/export';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

    private items: SideNavModel[] = [
        { item: 'Calendário', icon: 'date', menu: 'calendar', page: true },
        { item: 'Carteira', icon: 'wallet', menu: 'wallet', page: true},
        { item: 'Sair', icon: 'logout', menu: 'login', page: true}
      ];

  constructor() { }

  public getItems() {
    return this.items;
  }

}
