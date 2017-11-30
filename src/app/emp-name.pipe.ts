import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empName'
})
export class EmpNamePipe implements PipeTransform {

  transform(value: any, greeting: string, noOfCharacters: number): any {
    if(value) {
      return greeting + ' ' + value.slice(0,noOfCharacters).toUpperCase();
    }
    return value;
  }

}
