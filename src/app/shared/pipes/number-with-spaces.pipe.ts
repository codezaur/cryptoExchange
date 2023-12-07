import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'numberWithSpaces'
})
export class NumberWithSpacesPipe implements PipeTransform {
  transform(value: number): string {

    if (isNaN(value)) {
      return '';
    }

    const parts = value.toString().split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    let formattedNumber = integerPart;
    if (parts.length > 1) {
      const decimalPart = parts[1];
      formattedNumber += '.' + decimalPart;
    }

    return formattedNumber;
  }
}
