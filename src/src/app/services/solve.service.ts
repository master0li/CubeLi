import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Solve } from '../models/solve';

@Injectable({
  providedIn: 'root'
})
export class SolveService {

  constructor(private angularFirestore: AngularFirestore) { }


  public Add(solve: Solve) {
      return this.angularFirestore.collection("Solves").add(solve);
  }

  public Update(solve: Solve) {
    return this.angularFirestore.collection("Solves").doc(solve.ID).update(solve);
  }

  public Get(id: string) {


    let solve = new Solve();

    this.angularFirestore.collection("Solves").doc(id).snapshotChanges().subscribe(
      (result) => {
        return result.payload.data();
      },
      (error) => {
        return null;
      });

  }
}
