import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public errorHttp: boolean;
  public spinner: boolean;

  constructor(private weatherService: WeatherService) {
    this.weatherService.errorHttp$
      .subscribe((errorHttp) => this.errorHttp = errorHttp);
    this.weatherService.spinner$
      .subscribe((spinner) => this.spinner = spinner);
  }


  ngOnInit() {}

}

