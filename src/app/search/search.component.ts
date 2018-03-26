import { Component, OnInit,  } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchCity = 'Kiev';
  public posts: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.searchCity)
      .subscribe((res) => {
        this.posts = res;
        this.weatherService.arrayWeather$.next(res);
        this.searchCity = '';
      });
  }

  ngOnInit() {
    this.weatherService.getWeather(this.searchCity)
      .subscribe((res) => {
        this.posts = res;
        this.weatherService.arrayWeather$.next(res);
        this.searchCity = '';
      });
  }

}
