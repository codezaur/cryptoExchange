import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'commaToSpace'
})
export class CommaToSpacePipe implements PipeTransform {
  transform(value: string | null): string {

    return value ? value.replace(',', ' ') : '';
  }
}
