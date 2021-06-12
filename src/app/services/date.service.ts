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


}
