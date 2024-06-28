import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(dateOfBirth: number | any): unknown {
    const a = moment();
      const b = moment(dateOfBirth);
      const years = a.diff(b, 'year');
      b.add(years, 'years');
      const months = a.diff(b, 'months');
      b.add(months, 'months');
      const days = a.diff(b, 'days');
  
      let str = '';
      if (years != 0) {
        str = str + years + 'y '
      }
      if (months != 0) {
        str = str + months + 'm '
      }
      if (days != 0) {
        str = str + days + 'd'
      }
      return str;
  }

}
