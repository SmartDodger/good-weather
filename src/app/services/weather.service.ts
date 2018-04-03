import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WeatherService {
  readonly ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  readonly apikey = 'APPID=540a4f8c1e5c2e1b26a3720d3994ad63';

  public searchCity$: Subject<any> = new Subject();
  public units$: Subject<any> = new Subject();
  public arrayWeather$: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  getWeather(city, units) {
    this.searchCity$.next(city);
    this.units$.next(units);
    return this.http.get(`${this.ROOT_URL}${city}&units=${units}&${this.apikey}`);
  }
}
