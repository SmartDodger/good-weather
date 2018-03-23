import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public city = 'Kiev';
  cityWeather: any;
  /*cityWeather = {'sys': { 'country': 'UA' }};*/

  constructor(private weatherService: WeatherService) {
    this.weatherService.searchCity$
      .subscribe((city) => this.city = city);
    this.weatherService.arrayWeather$
      .subscribe((res) => {
        this.cityWeather = res;
        console.log(this.cityWeather.sys.country);
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
