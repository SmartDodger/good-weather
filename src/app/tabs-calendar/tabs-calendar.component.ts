import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-calendar',
  templateUrl: './tabs-calendar.component.html',
  styleUrls: ['./tabs-calendar.component.scss']
})
export class TabsCalendarComponent implements OnInit {

  constructor() {}

  daysWeeks = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];
  ngOnInit() {
  }

}
