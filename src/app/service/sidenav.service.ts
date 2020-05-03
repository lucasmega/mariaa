import { Injectable } from '@angular/core';

import { SideNavModel } from '../model/export';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

    private items: SideNavModel[] = [
        { item: 'Calendário', icon: 'date', menu: 'category', page: true },
      ];

  constructor() { }

  public getItems() {
    return this.items;
  }

}
