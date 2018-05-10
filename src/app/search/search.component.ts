import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  // public searchCityTest = 'Kiev, UA';
  // public searchCity = this.searchCityTest.split(',')[0];
  // public searchCountry = this.searchCityTest.split(',')[1];
  public resetValueSearch = 'Kiev, UA';
  public searchCity = '';
  public searchCountry = '';
  public errorHttp: boolean;
  public options = {
    types: ['(cities)']
  };

  handleAddressChange(address) {
    this.searchCity = address.name;
    this.searchCountry = address.address_components[2].short_name;
    console.log(this.searchCity);
    // console.log(address);
    this.resetValueSearch = address.formatted_address;

    this.getWeather();
  }
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

  }

  getWeather() {
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

    // this.searchCity = this.searchCityTest.split(',')[0];
    // this.searchCountry = this.searchCityTest.split(',')[1];
  }

  resetValue() {
    this.resetValueSearch = '';
  }
}
