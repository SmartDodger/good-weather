import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';
import { WeatherService } from '../../services/weather.service';
import * as _ from 'lodash';

interface User {
  email: string;
  cities: any;
}

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.scss']
})
export class MarkersComponent implements OnInit {
  public userEmail: string;
  public cityObj: object = {
    name: '',
    country: '',
    toggle: true
  };
  public currentUserCities: AngularFirestoreDocument<User>;
  public currentUserCitiesDoc: Observable<User>;
  public errorHttp: boolean;
  public spinner: boolean;
  public citiesArray: Array<any> = [];
  public currentUserCitiesDocData: any;
  public hiddenBtnAddMarks: boolean = true;
  public hiddenBtnRemoveMarks: boolean = true;
  public valueSearch: string = '';
  public options = {
    types: ['(cities)']
  };

  constructor(private authService: AuthService,
              private afs: AngularFirestore,
              private weatherService: WeatherService) {
    this.authService.checkCurrentUser();
    this.authService.currentUser$.subscribe(user => {
      this.userEmail = user.email;
      this.currentUserCities = this.afs.doc('users/' + this.userEmail);
      this.currentUserCitiesDoc = this.currentUserCities.valueChanges();
      this.currentUserCitiesDoc.subscribe(data => {
        this.currentUserCitiesDocData = data;
        if (this.currentUserCitiesDocData === undefined || this.currentUserCitiesDocData.cities.length <= 2) {
          this.hiddenBtnAddMarks = false;
        } else  {
          this.hiddenBtnAddMarks = true;
        }
        if (this.currentUserCitiesDocData.cities.length > 0) {
          this.hiddenBtnRemoveMarks = false;
        } else {
          this.hiddenBtnRemoveMarks = true;
        }
      });
    });
  }

  handleAddressChange(address, i, item) {
    const searchCity = address.name;
    const searchCountry = _.find(address.address_components, { types: ['country'] }).short_name;
    const id = this.userEmail;
    this.citiesArray = this.currentUserCitiesDocData.cities;
    this.citiesArray[i] = {
      name: searchCity,
      country: searchCountry,
      toggle: false
    };
    const userObj: User = {email: `${id}`, cities: this.citiesArray};
    this.currentUserCities.set(userObj);
    item.toggle = false;
    this.valueSearch = '';
  }

  cityWeather(item) {
    const city = item.name;
    const country = item.country;
    this.markGetWeather(city, country);
  }

  markGetWeather(city, country) {
    this.spinner = true;
    this.weatherService.spinner$.next(this.spinner);
    this.weatherService.getWeather(city, country)
      .subscribe(
        (res) => {
          this.weatherService.arrayWeather$.next(res);
          this.errorHttp = false;
          this.weatherService.errorHttp$.next(this.errorHttp);
          this.spinner = false;
          this.weatherService.spinner$.next(this.spinner);
        },
        (err) => {
          this.errorHttp = true;
          this.weatherService.errorHttp$.next(this.errorHttp);
          this.spinner = false;
          this.weatherService.spinner$.next(this.spinner);
          console.error(err);
        }
      );
  }

  addMark() {
    const id = this.userEmail;
    this.currentUserCitiesDoc.subscribe(data => {
      this.currentUserCitiesDocData = data;
    });

    // this.citiesArray = this.currentUserCitiesDocData.cities;

    /*for (let i = 0; i < this.citiesArray.length; i++) {
      if (this.citiesArray[i].name.length === 0) {
        this.citiesArray.splice(i, i);
        console.log(this.citiesArray);
        /!*const userObj: User = {email: `${id}`, cities: this.citiesArray};
        this.currentUserCities.set(userObj);*!/
      }
    }*/

    if (this.currentUserCitiesDocData === undefined || this.currentUserCitiesDocData.cities.length === 0) {
      this.citiesArray.push(this.cityObj);
      const userObj: User = {email: `${id}`, cities: this.citiesArray};
      this.currentUserCities.set(userObj);
      this.hiddenBtnRemoveMarks = false;
    } else if (this.currentUserCitiesDocData.cities.length === 1 && this.currentUserCitiesDocData.cities[0].name.length !== 0) {
      this.citiesArray = this.currentUserCitiesDocData.cities;
      this.citiesArray[0]['toggle'] = false;
      this.citiesArray.push(this.cityObj);
      const userObj: User = {email: `${id}`, cities: this.citiesArray};
      this.currentUserCities.update(userObj);
    } else if (this.currentUserCitiesDocData.cities.length === 2 && this.currentUserCitiesDocData.cities[1].name.length !== 0) {
      this.citiesArray = this.currentUserCitiesDocData.cities;
      this.citiesArray[1]['toggle'] = false;
      this.citiesArray.push(this.cityObj);
      const userObj: User = {email: `${id}`, cities: this.citiesArray};
      this.currentUserCities.update(userObj);
      this.hiddenBtnAddMarks = true;
    }
  }

  removeMark() {
    this.citiesArray = this.currentUserCitiesDocData.cities;
    const id = this.userEmail;
    this.citiesArray.pop();
    const userObj: User = {email: `${id}`, cities: this.citiesArray};
    this.currentUserCities.set(userObj);
    if (this.currentUserCitiesDocData.cities.length === 0) {
      this.hiddenBtnRemoveMarks = true;
    }
  }

  checkValue(item) {
    if (this.valueSearch.length === 0 && item.name.length === 0) {
      this.removeMark();
    }
    item.toggle = false;
    this.valueSearch = '';
  }

  ngOnInit() {

    /*setTimeout(() => {

    }, 3000);*/
  }

}
