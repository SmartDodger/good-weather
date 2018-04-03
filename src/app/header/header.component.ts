import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  units: any;
  city = 'Kiev';

  constructor(private weatherService: WeatherService) {
    this.weatherService.searchCity$
      .subscribe((city) => this.city = city);
  }

  getUnits() {
    this.weatherService.getWeather(this.city, this.units)
      .subscribe((res) => {
        this.weatherService.arrayWeather$.next(res);
    });
  }


  ngOnInit() {

  }

}
