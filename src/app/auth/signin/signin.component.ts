import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  signinGoogle() {
    this.authService.signInWithGoogle();
  }

  ngOnInit() {
    this.email = this.password = '';
  }

}
