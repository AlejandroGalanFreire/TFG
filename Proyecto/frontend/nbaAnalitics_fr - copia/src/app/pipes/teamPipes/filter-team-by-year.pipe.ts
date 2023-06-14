import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTeamByYear'
})
export class FilterTeamByYearPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultData =  [];
    for(const data of value){
      if(data.teamName.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        if(data.year === '2022-23'){
          resultData.push(data);
        }
      }
    }
    return resultData;
  }

}
