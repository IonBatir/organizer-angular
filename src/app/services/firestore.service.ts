import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import firebase from "firebase/app";
import * as dayjs from "dayjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  userDocument: AngularFirestoreDocument

  dateFormat = 'DD-MM-YYYY'

  constructor(private firestore: AngularFirestore) {
    const uid = firebase.auth().currentUser?.uid;
    this.userDocument = this.firestore.collection("users").doc(uid);
  }

  getTasks(date: dayjs.Dayjs) {
    return this.userDocument
      .collection("tasks", ref => ref.where('date', '==', date.format(this.dateFormat)))
      .valueChanges({idField: 'id'});
  }

  addTask(name: string, date: dayjs.Dayjs) {
    return this.userDocument.collection("tasks")
      .add({name, date: date.format(this.dateFormat)});
  }

  removeTask(taskId: string) {
    return this.userDocument.collection("tasks").doc(taskId).delete();
  }
}
