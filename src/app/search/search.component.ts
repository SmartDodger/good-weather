import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  public searchCity = 'Kiev';
  public units: any;
  public options = {
    types: ['(cities)']
  }
  public handleAddressChange() {
    console.log(this.searchCity);

  }
  constructor(private weatherService: WeatherService) {

  }

  getWeather() {
    console.log(this.searchCity);
    if (this.searchCity === '') {
      this.searchCity = 'Kiev';
    }
    this.weatherService.getWeather(this.searchCity)
      .subscribe((res) => {
        this.weatherService.arrayWeather$.next(res);
      });
  }

  delete() {
    this.searchCity = '';
  }

  ngOnInit() {
    this.weatherService.units$
      .subscribe((units) => this.units = units);
    this.getWeather();
  }

}
