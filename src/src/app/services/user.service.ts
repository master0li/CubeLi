import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFirestore: AngularFirestore) { }


  public Add(user: User) {
      return this.angularFirestore.collection("Users").doc(user.ID).set({
        Name: user.Name,
        Email: user.Email,
        Confirmed: user.Confirmed
      });
  }

  public Update(user: User) {
    return this.angularFirestore.collection("Users").doc(user.ID).update({
      Name: user.Name,
      Email: user.Email,
      Confirmed: user.Confirmed
    });
  }

  public Get(id: string) {
    return this.angularFirestore.collection("Users").doc(id).snapshotChanges();
  }
}
