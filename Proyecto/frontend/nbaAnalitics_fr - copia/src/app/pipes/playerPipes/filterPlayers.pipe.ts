import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlayer'
})
export class FilterPlayersPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultData =  [];
    for(const data of value){
      if(data.playerName.toLowerCase().indexOf(arg.toLowerCase()) > -1 || data.teamAbbrev.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultData.push(data);
      }
    }
    return resultData;
  }

}
