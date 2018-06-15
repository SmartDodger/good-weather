import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherService {
  readonly ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  readonly apikey = 'APPID=540a4f8c1e5c2e1b26a3720d3994ad63';

  public searchCity$: Subject<any> = new Subject();
  public searchCountry$: Subject<any> = new Subject();
  public units$: Subject<any> = new Subject();
  public arrayWeather$: Subject<any> = new Subject();
  public errorHttp$: Subject<any> = new Subject();
  public spinner$: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  getWeather(city, country) {
    this.searchCity$.next(city);
    this.searchCountry$.next(country);
    return this.http.get(`${this.ROOT_URL}${city},${country}&units=metric&${this.apikey}`)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throwError(error.message || 'ERROR');
  }
}
