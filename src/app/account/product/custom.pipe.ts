import { Pipe, PipeTransform } from '@angular/core';
import { dataSource } from './dataSource';

@Pipe({
  name: 'custompipe'
})
export class CustomPipe implements PipeTransform {

  transform(value:string): string {
    
    dataSource.findIndex(valueMatch=>{
      if(valueMatch.Image==value)
      {
        value= valueMatch.ProductName;
      }
    });
    return value;
  }

}
