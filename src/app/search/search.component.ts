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
  public searchCity = 'Kiev';
  public searchCountry = 'UA';
  public errorHttp: boolean;
  public options = {
    types: ['(cities)']
  };

  handleAddressChange(address) {
    this.searchCity = address.name;
    this.searchCountry = address.address_components[2].short_name;
    console.log(this.searchCity);
    this.getWeather();
  }
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // this.getWeather();
  }

  getWeather() {
    if (this.searchCity === '') {
      this.searchCity = 'Kiev';
    }
    // this.searchCity = this.searchCityTest.split(',')[0];
    // this.searchCountry = this.searchCityTest.split(',')[1];

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
}
