import { Component, OnInit } from '@angular/core';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public isSidenav: boolean;

  constructor(private utilService: UtilService) { }

  ngOnInit() {}

}
