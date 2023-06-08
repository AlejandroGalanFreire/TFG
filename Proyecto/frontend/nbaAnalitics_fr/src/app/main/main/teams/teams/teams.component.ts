import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeamStats } from 'src/app/models/teamStats';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../services/home.service';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {

  teamsStats: TeamStats[] = [];
  filterData = '';
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
  teamsSubscription!: Subscription;


  constructor(private dataService: DataService,
    private readonly homeService: HomeService) { }

  ngOnDestroy(): void {
    this.teamsSubscription.unsubscribe();
  }

  ngOnInit() {
    this.teamsSubscription = this.dataService.getTeamsStats().subscribe(
      (resp: any) => {
        this.teamsStats = JSON.parse(resp)
      }
    );
  }

}
