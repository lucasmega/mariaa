import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IgxCalendarComponent } from 'igniteui-angular';

import { DetailsWorkComponent } from '../details-work/details-work.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;

  constructor(private dialog: MatDialog) { }

  public ngOnInit() { }

  public onDaySelected(date: Date) {
    this.openDialog(this.getDay(date['date']));
  }


  public openDialog(date: Object) {
    const dialogRef = this.dialog.open(DetailsWorkComponent, { 
      width: '900px',
        data: date 
    });
    dialogRef.afterClosed().subscribe(result => { })
  }

  public getDay(date: Date): Object {
    if (date) {
      return {
        day: date.getDate().toString(),
        week: this.getWeek(date.getDay())
      }
    }
  }

  public getWeek(week: number): string {
    switch (week) {
      case 1:
        return 'Segunda-feira';
      case 2:
        return 'Terça-feira';
      case 3:
        return 'Quarta-feira';
      case 4:
        return 'Quinta-feira';
      case 5:
        return 'Sexta-feira';
      case 6:
        return 'Sábado';
      case 7:
        return 'Domingo';
    }
  }
}
