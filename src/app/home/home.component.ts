import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public city = 'Kiev';
  public cityWeather: any;
  public pressurehPaTOmmHg = 0.75006375541921;
  public windDirection: string;
  public windDirectionDeg: number;
  public hours = new Date().getHours();
  public isDayTime = this.hours > 6 && this.hours < 20;

  constructor(private weatherService: WeatherService) {
    this.weatherService.searchCity$
      .subscribe((city) => this.city = city);
    this.weatherService.arrayWeather$
      .subscribe((res) => {
        this.cityWeather = res;
        this.windDirectionDeg = this.cityWeather.list[5].deg;
        if (this.windDirectionDeg >= 338 || this.windDirectionDeg <= 22 ) {
          this.windDirection = 'wind-direction_n';
        } else if (this.windDirectionDeg >= 23 && this.windDirectionDeg <= 67 ) {
          this.windDirection = 'wind-direction_we';
        } else if (this.windDirectionDeg >= 68 && this.windDirectionDeg <= 112 ) {
          this.windDirection = 'wind-direction_e';
        } else if (this.windDirectionDeg >= 113 && this.windDirectionDeg <= 157 ) {
          this.windDirection = 'wind-direction_se';
        } else if (this.windDirectionDeg >= 158 && this.windDirectionDeg <= 203 ) {
          this.windDirection = 'wind-direction_s';
        } else if (this.windDirectionDeg >= 204 && this.windDirectionDeg <= 247 ) {
          this.windDirection = 'wind-direction_sw';
        } else if (this.windDirectionDeg >= 248 && this.windDirectionDeg <= 292 ) {
          this.windDirection = 'wind-direction_w';
        } else if (this.windDirectionDeg >= 293 && this.windDirectionDeg <= 337 ) {
          this.windDirection = 'wind-direction_nw';
        } else if (this.windDirectionDeg === 0 ) {
          this.windDirection = 'wind-direction_calm';
        }
      });
  }

  ngOnInit() {
  }

}

/*
this.weatherService.searchCity$
  .pipe(
    switchMap((city) => this.weatherService.getWeather(city))
  ).subscribe(weather => {
  this.cityWeather = weather;
});*/
