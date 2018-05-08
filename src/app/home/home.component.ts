import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public city = 'Kiev';
  public country = 'UA';
  public cityWeather: any;
  public units = 'metric';
  public completeGet = false;

  constructor(private weatherService: WeatherService) {
    this.weatherService.units$.subscribe((units) => {
      this.units = units;
    });
    this.weatherService.getWeather(this.city, this.country)
      .subscribe((res) => {
        this.weatherService.arrayWeather$.next(res);
      });
  }

  ngOnInit() {
    this.weatherService.searchCity$
      .subscribe((city) => this.city = city);

    this.weatherService.searchCountry$
      .subscribe((country) => this.country = country);

    this.weatherService.arrayWeather$
      .subscribe((res) => {
        this.cityWeather = res;
      });

    this.weatherService.completeGet$
      .subscribe((res) => {
        this.completeGet = res;
      });
  }


}

