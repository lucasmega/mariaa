import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private utilService: UtilService, private router: Router) { }

  ngOnInit() {
    this.utilService.sidenav(false);
  }

  public onRegister() {
    this.router.navigateByUrl('register');
  }

  public onCalendar() {
    this.router.navigateByUrl('/calendar');
  }

}
