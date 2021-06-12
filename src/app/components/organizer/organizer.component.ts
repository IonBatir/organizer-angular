import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable,} from "rxjs";

import {DateService} from "../../services/date.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  tasks: any[] = [];

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(public dateService: DateService, private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.dateService.date
      .pipe(switchMap(value => this.firestore
        .collection("tasks", ref => ref.where('date', '==', value.format('DD-MM-YYYY'))).valueChanges({idField: 'id'})))
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  submit() {
    this.firestore.collection("tasks").add({
      name: this.form?.value.name,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    }).then(() => {
      this.form.reset();
    });
  }

  async remove(taskId: string) {
    await this.firestore.collection("tasks").doc(taskId).delete();
  }

}
