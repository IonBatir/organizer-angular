import {Component, OnInit} from '@angular/core';
import {DateService} from "../../services/date.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required)
  });

  constructor(public dateService: DateService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const {title} = this.form?.value;
    console.log('title', title);
  }

}
