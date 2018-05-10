import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { fadeComponentAnimation } from '../animations/animation-component';

@Component({
  selector: 'app-home',
  animations: [fadeComponentAnimation],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public city = 'Kiev';
  public country = 'UA';
  public cityWeather: any;
  public units = 'metric';
  public errorHttp = false;

  constructor(private weatherService: WeatherService) {
    this.weatherService.units$.subscribe((units) => {
      this.units = units;
    });
    this.weatherService.getWeather(this.city, this.country)
      .subscribe((res) => {
        this.weatherService.arrayWeather$.next(res);
      });
    this.weatherService.searchCity$
      .subscribe((city) => this.city = city);

    this.weatherService.searchCountry$
      .subscribe((country) => this.country = country);

    this.weatherService.arrayWeather$
      .subscribe((cityWeather) => {
        this.cityWeather = cityWeather;
      });

    this.weatherService.errorHttp$
      .subscribe((errorHttp) => {
        this.errorHttp = errorHttp;
      });
  }

  ngOnInit() {

  }
}

