import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDayReference'
})
export class GetDayReferencePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const postDate = new Date(value);
    const today = new Date();
    if (postDate.getDate() === today.getDate()
    && postDate.getMonth() === today.getMonth()
    && postDate.getFullYear() === today.getFullYear()) {
      return postDate.getHours() + ':' + postDate.getMinutes();
    } else if (postDate.getDate() === (today.getDate() - 1)
    && postDate.getMonth() === today.getMonth()
    && postDate.getFullYear() === today.getFullYear()) {
      return 'Yesterday';
    } else {
    return postDate.toLocaleString('default', { month: 'short' }) + ' ' + postDate.getDate();
    }
  }

}
