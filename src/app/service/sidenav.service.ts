import { Injectable } from '@angular/core';

import { SideNavModel } from '../model/export';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

    private items: SideNavModel[] = [
        { item: 'Nova solicitação', icon: 'home', menu: 'category', page: true },
        { item: 'Solicitações', icon: 'solicitation', menu: 'solicitation', page: false },
        { item: 'Pagamentos', icon: 'payment', menu: 'payment',  page: true },
        { item: 'Contrato', icon: 'contract', menu: '',  page: true },
        { item: 'Configurações', icon: 'config', menu: '',  page: true },
        { item: 'Ajuda', icon: 'help', menu: 'help',  page: false },
        { item: 'Sair', icon: 'logout', menu: 'login',  page: true },
      ];

  constructor() { }

  public getItems() {
    return this.items;
  }

}
