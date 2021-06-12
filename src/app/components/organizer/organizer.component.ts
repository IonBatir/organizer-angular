import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable,} from "rxjs";

import {DateService} from "../../services/date.service";
import {switchMap} from "rxjs/operators";
import {FirestoreService} from "../../services/firestore.service";

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

  constructor(public dateService: DateService, private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.dateService.date
      .pipe(switchMap(value => this.firestoreService.getTasks(value)))
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  submit() {
    this.firestoreService
      .addTask(this.form?.value.name, this.dateService.date.value)
      .then(() => {
        this.form.reset();
      });
  }

  async remove(taskId: string) {
    await this.firestoreService.removeTask(taskId);
  }

}
