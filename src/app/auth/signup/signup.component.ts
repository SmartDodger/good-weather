import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor(public authService: AuthService) {
  }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  ngOnInit() {
  }

}
