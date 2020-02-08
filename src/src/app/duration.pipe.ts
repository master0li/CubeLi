import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})


///takes milliseconds converts to hs:mm:ss:
export class DurationPipe implements PipeTransform {

  transform(milliseconds: number): string {
        
    let seconds: number = 0;
    let minutes: number = 0;
    let hours: number = 0;

    if (milliseconds > 0) {

      //hours
      if (milliseconds >= 3600000) {
        hours = Math.floor(milliseconds / 3600000);
        milliseconds = milliseconds - 3600000 * hours;
      }

      //minutes
      if (milliseconds >= 60000) {
        minutes = Math.floor(milliseconds / 60000);
        milliseconds = milliseconds - 60000 * minutes;
      }

      //seconds
      if (milliseconds >= 1000) {
        seconds = Math.floor(milliseconds / 1000);
        milliseconds = milliseconds - 1000 * seconds;
      }

      let result = seconds.toString().padStart(2,'0') + "." + milliseconds.toString().padStart(3,'0');
      

      if (minutes > 0) {
        result = minutes.toString().padStart(2,'0') + ":" + result;
      }

      if (hours > 0) {
        result = hours.toString().padStart(2,'0') + ":" + result;
      }

      return result;

    }
    else if (milliseconds === 0) {
      return "00.000";
    }
    else {
      return "--.--";
    }


    return milliseconds.toString();

  }

}
