import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let newStr = value
    // giving multiple value to out custom pipe
    if(args[0])
      newStr += "."
    if(args[1] === "singlequote")
      newStr = "'" + newStr
    else if(args[1] === "doublequote")
      newStr = '"' + newStr
    return newStr;
  }

}
