import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState: firebase.User = null;

  public onAuthenticated = new Subject();
  public onLogOut = new Subject();

  constructor(public angularFirestore: AngularFirestore, public angularFireAuth: AngularFireAuth) { 
    
    angularFireAuth.authState.subscribe((auth) => {
      this.authState = auth;
      this.onAuthenticated.next();
    });

  }

  get Authenticated(): boolean {
    return this.authState !== null;
  }

  get User(): any {
    return this.authState ? this.authState : null;
  }

  get ID(): string {
    return this.authState ? this.authState.uid : '';
  }

  public LoginGoogle() {    
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((result) => {
      this.onAuthenticated.next();
      
    }).catch((error) => {
      window.alert(error)
    })
  }

  public LoginEmail(email: string, password: string) {    
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
    .then((result) => {
      
    }).catch((error) => {
      window.alert(error)
    })
  }

  public RegisterWithEmailAndPassword(email: string, password: string) {    
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((result) => {
      result.user.sendEmailVerification();
    }).catch((error) => {
      window.alert(error)
    })
  }

  public Logout() {
    return this.angularFireAuth.auth.signOut()
    .then((result) => {
      this.authState = null;
      this.onLogOut.next();      
    }).catch((error) => {
      window.alert(error)
    });  
  }

}
