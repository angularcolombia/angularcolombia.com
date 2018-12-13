import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args && args !== 0 && typeof value === 'string' && value.length >= args) {
      const sliced = value.slice(0, args);
      return sliced + '...';
    } else {
      return value;
    }
  }
}
