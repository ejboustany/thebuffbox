import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastCharacters'
})
export class LastCharactersPipe implements PipeTransform {

  transform(value: string, count: number = 4): string {
    if (value && value.length >= count) {
      return value.slice(-count);  // Extracts the last 'count' characters
    }
    return value;  // If the string is shorter than the specified count, return the full string
  }
}