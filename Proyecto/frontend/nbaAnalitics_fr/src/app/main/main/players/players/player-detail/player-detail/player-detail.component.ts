import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/main/main/services/home.service';
import { PlayerStats } from 'src/app/models/playerStats';
import Chart from 'chart.js/auto';
import { DataService } from 'src/app/services/data-service.service';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ComparativeDialogComponent } from 'src/app/main/main/comparativeDialog/comparative-dialog/comparative-dialog.component';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  public playerStats: PlayerStats = new PlayerStats();
  public val: number = 0; // rendimiento global del jugador
  public EFF_PerGame: number = 0; // eficiencia del jugador por partido
  public EFF_PerMinute: number = 0; // eficiencia del jugador por minuto
  public pointsCreated = 0; // puntos creados por el jugador a través de asistencias
  public trueShootingPercentage = 0; // porcentaje real de acierto en tiros
  private barChart: any;
  private pieChart: any;
  private radarChart: any;
  public allPlayers: PlayerStats[] = [];
  filterPlayers = '';


  constructor(private dataService: DataService,
    private readonly homeService: HomeService,
    public comparativeDialog: MatDialog){ }

  ngOnInit(): void {
    this.homeService.playerSelected.subscribe(data => {
      this.playerStats = data;
      this.playerStats.urlPicture = 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' + this.playerStats.playerId + '.png'
      this.calculatePlayerPerformance();

      // creación de los gráficos
      this.initializeBarChart();
      this.initializePieChart();
      this.initializeRadarChart();
    });
  }

  calculatePlayerPerformance(){
    this.calculateVal();
    this.calculateEFF();
    this.calculatePointsCreated();
    this.calculateTrueShootingPercentage();
  }

  calculateVal(){
    const points = this.playerStats.pts;
    const rebounds = this.playerStats.reb;
    const ast = this.playerStats.ast;
    const stl = this.playerStats.stl;
    const blk = this.playerStats.blk;
    const succesfulShots = this.playerStats.fg3m + this.playerStats.fgm + this.playerStats.ftm;
    const missedShots = (this.playerStats.fg3a - this.playerStats.fg3m) +
      (this.playerStats.fga - this.playerStats.fgm) + (this.playerStats.fta - this.playerStats.ftm);
    const tov = this.playerStats.tov;
    this.val = points + rebounds + ast + stl + blk + succesfulShots - missedShots - tov;
  }

  calculateEFF() {
    const points = this.playerStats.pts;
    const rebounds = this.playerStats.reb;
    const ast = this.playerStats.ast;
    const stl = this.playerStats.stl;
    const blk = this.playerStats.blk;
    const missedShots = (this.playerStats.fg3a - this.playerStats.fg3m) +
      (this.playerStats.fga - this.playerStats.fgm) + (this.playerStats.fta - this.playerStats.ftm);
    const tov = this.playerStats.tov;
    const EFF = points + rebounds + ast + stl + blk - missedShots - tov;
    this.EFF_PerGame = EFF / this.playerStats.gp;
    this.EFF_PerMinute = (EFF / this.playerStats.min) * 48;
  }

  calculatePointsCreated() {
    this.pointsCreated = this.playerStats.pts + (1.42 * this.playerStats.ast);
  }

  calculateTrueShootingPercentage() {
    const fieldShotsAttempted = this.playerStats.fg3a + this.playerStats.fga
    const freeShotsAttempted = this.playerStats.fta;
    const TS = this.playerStats.pts / (2*(fieldShotsAttempted + 0.44*freeShotsAttempted));
    this.trueShootingPercentage = TS*100;
  }

  initializeBarChart(){
    const barChartCanvas = document.getElementById("barChart") as HTMLCanvasElement;
    const ctx = barChartCanvas.getContext('2d');

    const barChartData = {
      labels: ["Valoración", "EFF por partido", "Puntos creados", "Porcentaje real de tiro"],
      datasets: [
        {
          label: this.playerStats.playerName,
          data: [this.val, this.EFF_PerGame, this.pointsCreated, this.trueShootingPercentage],
          backgroundColor: [
            (this.val < 1000) ? 'red' : (this.val < 2000) ? 'yellow' : 'green',
            (this.EFF_PerGame < 15) ? 'red' : (this.EFF_PerGame < 20) ? 'yellow' : 'green',
            (this.pointsCreated < 1000) ? 'red' : (this.pointsCreated < 2000) ? 'yellow' : 'green',
            (this.trueShootingPercentage < 30) ? 'red' : (this.trueShootingPercentage < 50) ? 'yellow' : 'green'
          ]
        }
      ]
    };

    if(ctx){
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
      });
    }
  }

  initializePieChart(){
    const pieChartCanvas = document.getElementById("pieChart") as HTMLCanvasElement;
    const ctx = pieChartCanvas.getContext('2d');

    const pieChartData = {
      labels: [
        'rebotes defensivos',
        'faltas',
        'bloqueos',
        'rebotes ofensivos',
        'tiros anotados',
        'asistencias'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [this.playerStats.dreb, this.playerStats.pf, this.playerStats.blk, this.playerStats.oreb, this.playerStats.ftm
          + this.playerStats.fgm + this.playerStats.fg3m, this.playerStats.ast],
        backgroundColor: [
          'red',
          'yellow',
          'orange',
          'blue',
          'green',
          'white'
        ],
        hoverOffset: 4
      }]
    };

    if(ctx){
      this.pieChart = new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
      });
    }
  }

  initializeRadarChart(){
    const radarChartCanvas = document.getElementById("radarChart") as HTMLCanvasElement;
    const ctx = radarChartCanvas.getContext('2d');

    const radarChartData = {
      labels: [
        'tiros libres',
        'tiros de 2 puntos',
        'triples',
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [this.playerStats.fta, this.playerStats.fga, this.playerStats.fg3a],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'My Second Dataset',
        data: [this.playerStats.ftm, this.playerStats.fgm, this.playerStats.fg3m],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };

    if(ctx){
      this.radarChart = new Chart(ctx, {
        type: 'radar',
        data: radarChartData,
      });
    }
  }

  setAllPlayers(){
    this.homeService.allPlayers.subscribe(data => {
      this.allPlayers = data.filter(player => player.playerId !== this.playerStats.playerId);
    });
  }

  openMenuDialog(playerToCompare: PlayerStats){
    debugger;
    this.comparativeDialog.open(ComparativeDialogComponent, {
      data: {playerDetail: this.playerStats, playerToCompare: playerToCompare}
    })
  }

}
