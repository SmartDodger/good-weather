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
  public hours = new Date().getHours();
  public isDayTime = this.hours > 6 && this.hours < 20;

  constructor(private weatherService: WeatherService) {
    this.weatherService.searchCity$
      .subscribe((city) => this.city = city);
    this.weatherService.arrayWeather$
      .subscribe((res) => {
        this.cityWeather = res;
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
