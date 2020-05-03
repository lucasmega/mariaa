import { Injectable } from '@angular/core';

import { SideNavModel } from '../model/export';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

    private items: SideNavModel[] = [
        { item: 'Calendário', icon: 'date', menu: 'category', page: true },
        { item: 'Carteira', icon: 'wallet', menu: 'wallet', page: true}
      ];

  constructor() { }

  public getItems() {
    return this.items;
  }

}
