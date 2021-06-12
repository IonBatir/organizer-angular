import {Component, OnInit} from '@angular/core';
import * as dayjs from "dayjs";
import {DateService} from "../../services/date.service";

type Day = {
  active: boolean;
  disabled: boolean;
  selected: boolean;
  value: dayjs.Dayjs;
}

type Week = {
  days: Day[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: Week[] = [];

  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generateCalendar.bind(this));
  }

  generateCalendar(now: dayjs.Dayjs) {
    const startDay = now.startOf('month').startOf('week');
    const endDay = now.endOf('month').endOf('week');

    let date = startDay.subtract(1, 'day');

    const calendar: any = []
    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, 'day');
            const active = dayjs().isSame(value, 'date');
            const disabled = !now.isSame(value, 'month');
            const selected = now.isSame(value, 'date');

            date = date.add(1, 'day');

            return {
              active, disabled, selected, value
            }
          })
      })
    }

    this.calendar = calendar;
  }

  select(day: dayjs.Dayjs) {
    this.dateService.changeDate(day);
  }

}
