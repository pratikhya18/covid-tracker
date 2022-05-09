import { Pipe, PipeTransform } from '@angular/core';
import { numbers } from '@material/toolbar';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return (value*20)+''+''+'stackblitz'
  }

}
