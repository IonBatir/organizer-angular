import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from "dayjs";

@Pipe({
  name: 'dayjs'
})
export class DayjsPipe implements PipeTransform {

  transform(value: dayjs.Dayjs | null, format: string = 'MMMM YYYY'): string {
    return value ? value.format(format) : '-';
  }

}
