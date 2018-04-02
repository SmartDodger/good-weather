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

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeather(this.city)
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

