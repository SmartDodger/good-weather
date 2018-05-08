import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  public searchCity = 'Kiev';
  public searchCountry = 'UA';
  public completeGet = false;
  public options = {
    types: ['(cities)']
  };

  handleAddressChange(address) {
    this.searchCity = address.name;
    this.searchCountry = address.address_components[2].short_name;
    this.getWeather();
  }
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    if (this.searchCity === '') {
      this.searchCity = 'Kiev';
    }

    this.weatherService.getWeather(this.searchCity, this.searchCountry)
      .subscribe(
        (res) => this.weatherService.arrayWeather$.next(res),
        err => console.error(err),
        () => this.completeGet = true
      );
    console.log(this.completeGet);
    this.weatherService.completeGet$.next(this.completeGet);
  }
}
