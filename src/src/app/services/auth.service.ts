import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Subject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState: firebase.User = null;

  public onAuthenticated = new Subject();
  public onRegistered = new Subject();
  public onLogOut = new Subject();

  constructor(public angularFirestore: AngularFirestore, public angularFireAuth: AngularFireAuth, public userService: UserService) { 
    
    angularFireAuth.authState.subscribe((auth) => {
      console.log(auth);
      this.authState = auth;
      this.onAuthenticated.next();
    });

  }

  get Authenticated(): boolean {
    return (this.authState !== null && this.authState.emailVerified !== false) ? true : false;
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

      //save or update
      this.userService.Add({
        ID: result.user.uid,
        Name: result.user.displayName,
        Email: result.user.email,
        Confirmed: result.user.emailVerified
      });

      this.onAuthenticated.next();
      return new Promise((resolve, reject) => {
        resolve(result);
      });
      
    }).catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    })
  }

  public LoginEmail(email: string, password: string) {    
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
    .then((result) => {
      this.onAuthenticated.next();
      return new Promise((resolve, reject) => {
        resolve(result);
      });
      
    }).catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    })
  }

  public RegisterWithEmailAndPassword(email: string, password: string) {    
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((result) => {
      result.user.sendEmailVerification();
      this.onRegistered.next();
      return new Promise((resolve, reject) => {
        resolve(result);
      });
      
    }).catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    })
  }

  public Logout() {
    return this.angularFireAuth.auth.signOut()
    .then((result) => {
      this.authState = null;
      this.onLogOut.next();  
      return new Promise((resolve, reject) => {
        resolve(result);
      });
      
    }).catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    })
  }

}
