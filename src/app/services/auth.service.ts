import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class AuthService {
  public user: Observable<firebase.User>;
  public errorEmail$: Subject<any> = new Subject();

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        this.errorEmail$.next(err.message);
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  signInWithGoogle() {
    return this.firebaseAuth
      .auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
  }


  logout() {
    this.firebaseAuth.auth.signOut();
  }

}
