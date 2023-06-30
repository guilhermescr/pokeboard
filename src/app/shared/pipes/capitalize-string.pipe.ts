import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeString',
})
export class CapitalizeStringPipe implements PipeTransform {
  transform(value: string): string {
    if (value.includes('-')) {
      value = value.replaceAll('-', ' ');
    }

    if (value.includes(' ')) {
      const words = value.split(' ');
      const capitalizedWords = words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return capitalizedWords;
    } else {
      const capitalizedWord = value.charAt(0).toUpperCase() + value.slice(1);
      return capitalizedWord;
    }
  }
}
