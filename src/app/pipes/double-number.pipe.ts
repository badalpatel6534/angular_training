import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleNumber',
  standalone: true,
  pure: false
})
export class DoubleNumberPipe implements PipeTransform {

  transform(items: number[]): number[] {
    console.log("ImPure pipe called::::::::::::::::::::", items);
    return items.map(item => item * 2);
  }

}
