import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public units = 'metric';

  constructor(private weatherService: WeatherService) {

  }

  valueUnits() {
    this.weatherService.units$.next(this.units);
  }

  ngOnInit() {

  }

}
