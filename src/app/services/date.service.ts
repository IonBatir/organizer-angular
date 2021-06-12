import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import * as dayjs from "dayjs";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<dayjs.Dayjs> = new BehaviorSubject(dayjs());

  constructor() {
  }
}
