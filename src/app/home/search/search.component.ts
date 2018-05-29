import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as _ from 'lodash';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {
  public resetValueSearch = 'Kiev, UA';
  public searchCity = '';
  public searchCountry = '';
  public errorHttp: boolean;
  public options = {
    types: ['(cities)']
  };

  handleAddressChange(address) {
    this.searchCity = address.name;
    this.searchCountry = _.find(address.address_components, { types: ['country'] }).short_name;
    this.resetValueSearch = address.formatted_address;
    this.getWeather();
  }
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

  }

  getWeather(): void {
    this.errorHttp = true;
    this.weatherService.errorHttp$.next(this.errorHttp);

    this.weatherService.getWeather(this.searchCity, this.searchCountry)
      .subscribe(
        (res) => this.weatherService.arrayWeather$.next(res),
        (err: HttpErrorResponse) => {
          this.errorHttp = true;
          this.weatherService.errorHttp$.next(this.errorHttp);
          console.error(err);
        },
        () => {
          this.errorHttp = false;
          this.weatherService.errorHttp$.next(this.errorHttp);
        }
      );
  }

  resetValue(): void {
    this.resetValueSearch = '';
  }
}
