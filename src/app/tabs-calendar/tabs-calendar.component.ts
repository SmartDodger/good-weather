import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tabs-calendar',
  templateUrl: './tabs-calendar.component.html',
  styleUrls: ['./tabs-calendar.component.scss']
})
export class TabsCalendarComponent implements OnInit {
  public weatherWeek: any;
  public daysWeek: any;
  public fiveDaysArray = [];
  public daysWeekName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  public dayName = [];
  public weatherDay: any;
  public pressurehPaTOmmHg = 0.75006375541921;
  public msToMph = 2.23694;
  public windDirection: string;
  public windDirectionDeg: number;
  public cityWeather: any;
  public units = 'metric';
  public errorHttp = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.units$
      .subscribe((units) => this.units = units);
    this.weatherService.arrayWeather$
      .subscribe((res) => {
        this.weatherDay = [];
        this.weatherWeek = res;
        this.daysWeek = new Date(this.weatherWeek.list[0].dt_txt);

        for (let i = 0; i <= 4; i++) {
          const day = this.daysWeek;
          const nextDay = new Date(day);
          const dayMonth = nextDay.setDate(day.getDate() + i);
          const dayWeek = new Date(dayMonth).getDay();
          this.dayName.push([this.daysWeekName[dayWeek]]);
          for (let y = 0; y < this.weatherWeek.list.length; y++) {
            if (new Date(this.weatherWeek.list[y].dt_txt).getDay() === dayWeek) {
              this.fiveDaysArray.push(this.weatherWeek.list[y]);
              this.windDirectionDeg = this.weatherWeek.list[y].wind.deg;
              if (this.windDirectionDeg >= 338 || this.windDirectionDeg <= 22 ) {
                this.windDirection = 'wind-direction_n';
              } else if (this.windDirectionDeg >= 23 && this.windDirectionDeg <= 67 ) {
                this.windDirection = 'wind-direction_we';
              } else if (this.windDirectionDeg >= 68 && this.windDirectionDeg <= 112 ) {
                this.windDirection = 'wind-direction_e';
              } else if (this.windDirectionDeg >= 113 && this.windDirectionDeg <= 157 ) {
                this.windDirection = 'wind-direction_se';
              } else if (this.windDirectionDeg >= 158 && this.windDirectionDeg <= 203 ) {
                this.windDirection = 'wind-direction_s';
              } else if (this.windDirectionDeg >= 204 && this.windDirectionDeg <= 247 ) {
                this.windDirection = 'wind-direction_sw';
              } else if (this.windDirectionDeg >= 248 && this.windDirectionDeg <= 292 ) {
                this.windDirection = 'wind-direction_w';
              } else if (this.windDirectionDeg >= 293 && this.windDirectionDeg <= 337 ) {
                this.windDirection = 'wind-direction_nw';
              } else if (this.windDirectionDeg === 0 ) {
                this.windDirection = 'wind-direction_calm';
              }
              this.weatherWeek.list[y].main['winddeg'] = this.windDirection;
            }
          }
          this.weatherDay.push({numberDay: this.fiveDaysArray, day: this.dayName[i]});
          this.fiveDaysArray = [];
        }
      });

    this.weatherService.errorHttp$
      .subscribe((errorHttp) => {
        this.errorHttp = errorHttp;
      });
  }
}
