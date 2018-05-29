import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { fadeComponentAnimation } from '../../animations/animation-component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  animations: [fadeComponentAnimation],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public units: string = 'metric';
  public errorHttp: boolean = false;
  public currentUser: any;
  public userEmailVerified: boolean;
  public userEmail: string;

  constructor(private weatherService: WeatherService, private authService: AuthService) {
    this.weatherService.errorHttp$
      .subscribe((errorHttp) => {
        this.errorHttp = errorHttp;
      });
  }

  valueUnits(): void {
    this.weatherService.units$.next(this.units);
  }

  signOut(): void {
    this.authService.logout();
    this.checkCurrentUser();
  }

  checkCurrentUser(): void {
    this.userEmailVerified = false;
    this.userEmail = '';
    this.authService.currentUser$.subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.userEmailVerified = currentUser.emailVerified;
      this.userEmail = currentUser.email;
      console.log(currentUser);
    });
  }

  ngOnInit() {
    this.checkCurrentUser();
  }
}
