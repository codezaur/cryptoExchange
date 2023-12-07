import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSymbol',
  standalone: true,
})
export class NumberSymbolPipe implements PipeTransform {

  transform(input: number): unknown {

    const exp = Math.floor(Math.log(input) / Math.log(1000));
    const suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

    if (input < 1000) {
      return input;
    }

    return '$' + (input / Math.pow(1000, exp)).toFixed() + suffixes[exp - 1];
  }

}