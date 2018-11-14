import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getId'
})
export class GetIdPipe implements PipeTransform {

  transform(value: any, ...args): any {
  	console.log(value)
  	let a = value.replace(/\s/g, '')
    return a.charAt(0).toLowerCase() + a.slice(1);;
  }

}
