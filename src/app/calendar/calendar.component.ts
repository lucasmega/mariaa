import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  public range: Date[] = [];

  @ViewChild('calendar', { static: false }) public calendar: IgxCalendarComponent;

  constructor() { }

  public ngOnInit() { }

  public verifyRange(dates: Date[]) {
    console.log(dates);
  }

  public selectPTOdays(dates: Date[]) {
    this.range = dates;
  }
}
