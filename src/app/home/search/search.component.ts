import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {
  public resetValueSearch = 'Kiev, UA';
  public searchCity = 'Kiev';
  public searchCountry = 'UA';
  public errorHttp: boolean;
  public spinner: boolean;
  public options = {
    types: ['(cities)']
  };

  handleAddressChange(address) {
    this.searchCity = address.name;
    this.searchCountry = _.find(address.address_components, { types: ['country'] }).short_name;
    this.resetValueSearch = address.formatted_address;
    this.getWeather();
  }
  constructor(private weatherService: WeatherService) {
    this.getWeather();
  }

  getWeather() {
    this.spinner = true;
    this.weatherService.spinner$.next(this.spinner);
    this.weatherService.getWeather(this.searchCity, this.searchCountry)
      .subscribe(
        (res) => {
          this.weatherService.arrayWeather$.next(res);
          this.errorHttp = false;
          this.weatherService.errorHttp$.next(this.errorHttp);
          this.spinner = false;
          this.weatherService.spinner$.next(this.spinner);
        },
        (err) => {
          this.errorHttp = true;
          this.weatherService.errorHttp$.next(this.errorHttp);
          this.spinner = false;
          this.weatherService.spinner$.next(this.spinner);
          console.error(err);
        }
      );
  }

  resetValue(): void {
    this.resetValueSearch = '';
  }

  ngOnInit() {}
}
