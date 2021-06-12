import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import * as dayjs from "dayjs";
import 'dayjs/locale/ro'

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<dayjs.Dayjs> = new BehaviorSubject(dayjs().locale('ro'));

  changeMonth(direction: number) {
    const value = this.date.value.add(direction, 'month');
    this.date.next(value);
  }

  changeDate(date: dayjs.Dayjs) {
    const value = this.date.value.set('date', date.date()).set('month', date.month());
    this.date.next(value);
  }

}
