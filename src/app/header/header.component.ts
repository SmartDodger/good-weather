import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { fadeComponentAnimation } from '../animations/animation-component';

@Component({
  selector: 'app-header',
  animations: [fadeComponentAnimation],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public units: string = 'metric';
  public errorHttp: boolean = false;

  constructor(private weatherService: WeatherService) {
    this.weatherService.errorHttp$
      .subscribe((errorHttp) => {
        this.errorHttp = errorHttp;
      });
  }

  valueUnits() {
    this.weatherService.units$.next(this.units);
  }

  ngOnInit() {}
}
