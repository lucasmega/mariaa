import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material/dialog';

import { AddressModel } from '../model/export';


@Component({
  selector: 'app-details-work',
  templateUrl: './details-work.component.html',
  styleUrls: ['./details-work.component.scss'],
})
export class DetailsWorkComponent implements OnInit {

  public addressModel = new AddressModel();
  public category = 'Domestica';

  constructor(public dialogRef: MatDialogRef<DetailsWorkComponent>, @Inject(MAT_DIALOG_DATA) public data: Date) { }

  ngOnInit() { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
