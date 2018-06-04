import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public errorHttp: boolean;

  constructor(private weatherService: WeatherService, private authService: AuthService) {
    this.weatherService.errorHttp$
      .subscribe((errorHttp) => {
        this.errorHttp = errorHttp;
      });
    setTimeout(() => {
      this.authService.checkCurrentUser();
    }, 2200);
  }

  ngOnInit() {

  }

}

