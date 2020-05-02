import { Component, OnInit } from '@angular/core';

import { ProfileModel } from '../../model/export';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public profile = new ProfileModel();
  public isDisabled = true;

  constructor() { }

  ngOnInit() { }

  public editProfile() {
    this.isDisabled = !this.isDisabled;

  }

}

