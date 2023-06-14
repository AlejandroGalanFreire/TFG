import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTeam'
})
export class FilterTeamsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultData =  [];
    for(const data of value){
      if(data.teamName.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultData.push(data);
      }
    }
    return resultData;
  }

}
