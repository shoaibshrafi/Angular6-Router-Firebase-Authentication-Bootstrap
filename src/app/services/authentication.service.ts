import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  login(username: string, password: string){    

    return new Promise<any>((resolve, reject) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(username, password)
      .then(res => {
        localStorage.setItem('currentUser', username);
        console.log('Nice, it worked!');
        resolve(res);
      }, err => {
        console.log('Something went wrong:',err.message);  
        reject(err.message)
      })
    })
    }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
