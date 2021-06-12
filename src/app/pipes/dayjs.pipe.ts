import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from "dayjs";

@Pipe({
  name: 'dayjs',
  pure: false
})
export class DayjsPipe implements PipeTransform {

  transform(value: dayjs.Dayjs | null, format?: string): string {
    return value ? value.format(format) : '-';
  }

}
