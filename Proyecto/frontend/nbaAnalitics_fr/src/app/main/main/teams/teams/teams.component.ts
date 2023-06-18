import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../services/home.service';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';
import { TeamByYear } from 'src/app/models/teamByYear';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {

  teamsStats: TeamByYear[] = [];
  filterData = '';
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
  teamsSubscription!: Subscription;
  emptyData = true;


  constructor(private dataService: DataService,
    private readonly homeService: HomeService) { }

  ngOnDestroy(): void {
    this.teamsSubscription.unsubscribe();
  }

  ngOnInit() {
    this.teamsSubscription = this.dataService.getTeamsStats().subscribe(
      (resp: any) => {
        this.teamsStats = JSON.parse(resp)
        this.homeService.setAllTeams(this.teamsStats);
        if(this.teamsStats.length > 0){
          this.emptyData = false;
        } else {
          this.emptyData = true;
        }
      }
    );
  }

}
