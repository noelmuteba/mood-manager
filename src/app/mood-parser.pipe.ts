import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moodParser'
})
export class MoodParserPipe implements PipeTransform {

  transform(value: number): string {

    switch (value) {
      case 0:
        return 'Happy';
      case 1:
        return 'Indifferent';
      case 2:
        return 'Sad';
      default:
        return 'Unknown';
    }

    
  }

}
