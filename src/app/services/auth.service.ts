import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { catchError, map} from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

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

  /*signInWithGoogle(): Observable<any> {
    return fromPromise(
      this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
      .pipe(
        map((res) => {
          console.log('Nice, it worked!');
          return res;
        }),
        catchError((err) => {
          console.log('Something went wrong:', err.message);
          return _throw(err);
        })
      );
  }
*/
    // return this.firebaseAuth
    //   .auth.signInWithPopup(
    //     new firebase.auth.GoogleAuthProvider()
    //   ).then(value => {
    //     console.log('Nice, it worked!');
    //   })
    //   .catch(err => {
    //     console.log('Something went wrong:', err.message);
    //   });


  /*googleAuthentication(): Observable<User> {
    return fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
      .pipe(
        map(response => response.user),
        switchMap(user => fromPromise(user.getIdToken())),
        switchMap((token: string) => this.authenticate(token)),
        catchError(error => {
          console.log('signInWithPopup', error);
          return _throw(error);
        })
      );
  }*/

  signInWithGoogle() {
    return new Promise<any>((resolve, reject) => {
      this.firebaseAuth.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => {
          resolve(res);
          console.log('Nice, it worked!');
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  signInWithFacebook(){
    return new Promise<any>((resolve, reject) => {
      this.firebaseAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          resolve(res);
          console.log('Nice, it worked!');
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }


  logout() {
    this.firebaseAuth.auth.signOut();
  }

}
