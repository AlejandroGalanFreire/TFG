import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultData =  [];
    for(const data of value){
      if(data.player_name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || data.team_abbrev.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultData.push(data);
      }
    }
    return resultData;
  }

}
