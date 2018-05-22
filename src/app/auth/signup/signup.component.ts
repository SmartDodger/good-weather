import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // public email: string = '';
  // public password: string = '';
  public confirmPassword: string = '';
  // public errorPassword: boolean;
  // public minLengthPassword: boolean;
  public emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  public errorEmail: any;

  public signupForm: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService) {
  }

  signup() {

    /*if (!(this.password.length <= 6)) {
      this.minLengthPassword = true;
    } else if (this.password === this.confirmPassword) {
      this.authService.signup(this.email, this.password);
      this.email = this.password = this.confirmPassword = '';
    } else {
      this.errorPassword = true;
    }
    this.authService.errorEmail$
      .subscribe((errorEmail) => {
        this.errorEmail = errorEmail;
      });*/
  }

  ngOnInit() {
    this.initForm();
  }




  initForm() {
    this.signupForm = this.fb.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.minLength(4)
      ]]
    });
  }



  isControlInvalid(controlName: string): boolean {
    const control = this.signupForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  passwordGet()  {
    const pass = this.signupForm.get('password');
    console.log(pass);
    return pass;
  }



}
