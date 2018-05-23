import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {}

  signinGoogle() {
    this.authService.signInWithGoogle()
      .then(res => {
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {

  }

}
