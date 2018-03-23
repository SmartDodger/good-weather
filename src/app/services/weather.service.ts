import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WeatherService {
  readonly ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  readonly apikey = 'APPID=540a4f8c1e5c2e1b26a3720d3994ad63';

  public searchCity$: Subject<any> = new Subject();
  public arrayWeather$: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  getWeather(city) {
    this.searchCity$.next(city);
    return this.http.get(`${this.ROOT_URL}${city}&${this.apikey}`);
  }
}

/*{
  "coord": { "lon": -0.13, "lat": 51.51 },
  "weather": [ { "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" } ],
  "base": "stations",
  "main": { "temp": 280.65, "pressure": 1029, "humidity": 45, "temp_min": 280.15, "temp_max": 281.15 },
  "visibility": 10000,
  "wind": { "speed": 4.6, "deg": 60 },
  "clouds": { "all": 75 },
  "dt": 1521553800,
  "sys": { "type": 1, "id": 5091, "message": 0.0064, "country": "GB", "sunrise": 1521525728, "sunset": 1521569667 },
  "id": 2643743,
  "name": "London",
  "cod": 200
}*/
