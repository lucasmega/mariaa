import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public isSidenav: boolean;

  constructor(private utilService: UtilService, private router: Router) { 
    this.utilService.emitSidenav.subscribe(sidenav => this.isSidenav = sidenav);
  }

  ngOnInit() {}

  public onCalendar() {
    this.router.navigateByUrl('/calendar');
  }

}
