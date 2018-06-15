import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { fadeComponentAnimation } from '../../animations/animation-component';

@Component({
  selector: 'app-weather-now',
  animations: [fadeComponentAnimation],
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss']
})
export class WeatherNowComponent implements OnInit {

  public city: string = 'Kiev';
  public country: string = 'UA';
  public cityWeather: any;
  public units: string = 'metric';
  public errorHttp: boolean = false;

  constructor(private weatherService: WeatherService) {

  }

  tempValue() {
    return this.units === 'metric' ?
      this.cityWeather.list[0].main.temp :
      ((this.cityWeather.list[0].main.temp) * (9 / 5) + 32);
  }

  ngOnInit() {
    this.weatherService.units$
      .subscribe((units) => this.units = units);

    this.weatherService.searchCity$
      .subscribe((city) => this.city = city);

    this.weatherService.searchCountry$
      .subscribe((country) => this.country = country);

    this.weatherService.arrayWeather$
      .subscribe((cityWeather) => this.cityWeather = cityWeather);

    this.weatherService.errorHttp$
      .subscribe((errorHttp) => this.errorHttp = errorHttp);
  }
}
