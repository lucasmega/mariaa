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

  public getMonth(date: Date) {
    switch (date.getMonth()) {
      case 0:
        return 'jan';
      case 1:
        return 'fev';
      case 2:
        return 'mar';
      case 3:
        return 'abr';
      case 4:
        return 'mai';
      case 5:
        return 'jun';
      case 6:
        return 'jul';
      case 7:
        return 'ago';
      case 8:
        return 'set';
      case 9:
        return 'out';
      case 10:
        return 'nov';
      case 11:
        return 'dez';
    }
  }

  public getYear(date: Date) {
    return date.getFullYear();
  }

  public getWeek(week: number): string {
    switch (week) {
      case 0:
        return 'Domingo';
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
    }
  }
}
