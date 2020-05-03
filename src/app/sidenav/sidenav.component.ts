import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SideNavModel } from '../model/export';
import { SidenavService } from '../service/export';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public showFiller = false;
  public items: any[] = [];

  constructor(private sidenavService: SidenavService, private router: Router) {
    this.items = this.sidenavService.getItems();
  }

  ngOnInit() {}

  public openNav() {
    sessionStorage.setItem('arrow', JSON.stringify(true))
    document.getElementById('mySidenav').style.width = '100%';
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    this.items = this.sidenavService.getItems();
  }

  public openPage(item: SideNavModel) {
    item.page ? this.navigateByUrl(item.menu) : null;
   }

  public onProfile() {
    this.router.navigateByUrl('/profile');
    this.closeNav();
  }

  public navigateByUrl(url: string) {
    this.closeNav();
    this.router.navigateByUrl(`/${url}`);
  }

}
