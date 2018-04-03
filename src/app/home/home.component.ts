import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public city = 'Kiev';
  public cityWeather: any;
  public units = 'metric';

  constructor(private weatherService: WeatherService) {
    this.weatherService.units$.subscribe((units) => {
      this.units = units;
    });
    this.weatherService.getWeather(this.city, this.units)
      .subscribe((res) => {
        this.weatherService.arrayWeather$.next(res);
      });
  }

  ngOnInit() {

    this.weatherService.searchCity$
      .subscribe((city) => this.city = city);

    this.weatherService.arrayWeather$
      .subscribe((res) => {
        this.cityWeather = res;
      });
  }
}

