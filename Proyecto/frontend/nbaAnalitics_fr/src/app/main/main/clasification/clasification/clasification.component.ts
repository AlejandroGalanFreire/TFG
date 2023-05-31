import { Component, OnInit } from '@angular/core';
import { ElemScoreboard } from 'src/app/models/elemScoreboard';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.scss']
})
export class ClasificationComponent implements OnInit {

  leagueSelected: string = '';

  clasification: ElemScoreboard[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.changeLeague('NBA');
  }

  changeLeague(league: string){
    this.leagueSelected = league;

    this.dataService.getClasification(this.leagueSelected).subscribe(
      (resp: any) => {
        this.clasification = JSON.parse(resp)
        console.log(this.clasification);
      }
    );
  }

}
