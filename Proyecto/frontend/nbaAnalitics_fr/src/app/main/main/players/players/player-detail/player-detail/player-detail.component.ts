import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from 'src/app/main/main/services/home.service';
import { PlayerStats } from 'src/app/models/playerStats';
import Chart from 'chart.js/auto';
import { DataService } from 'src/app/services/data-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ComparativePlayersDialogComponent } from 'src/app/main/main/comparativeDialog/comparative-dialog/comparativePlayers-dialog.component';
import { ChartType } from 'chart.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit, OnDestroy {

  public playerStats: PlayerStats = new PlayerStats();
  private barChart!: Chart;
  private pieChart!: Chart;
  private radarChart!: Chart;
  public allPlayers: PlayerStats[] = [];
  filterPlayers = '';
  playerSelectedSubscription!: Subscription;
  playerByIdSubscription!: Subscription;


  constructor(private dataService: DataService,
    private readonly homeService: HomeService,
    public comparativeDialog: MatDialog){ }

  ngOnDestroy(): void {
    this.playerSelectedSubscription.unsubscribe();
    this.playerByIdSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.playerSelectedSubscription = this.homeService.playerSelected.subscribe(data => {
      this.playerByIdSubscription = this.dataService.getPlayerStatsById(data).subscribe(
        (resp: any) => {
          this.playerStats = JSON.parse(resp);

          this.calculatePlayerPerformance(this.playerStats);

          // creación de los gráficos
          // Chart.register(ChartDataLabels);
          this.initializeBarChart(this.playerStats);
          this.initializePieChart(this.playerStats);
          this.initializeRadarChart(this.playerStats);
        }
      );
    });
  }

  calculatePlayerPerformance(player: PlayerStats){
    this.calculateVal(player);
    this.calculateEFF(player);
    this.calculatePointsCreated(player);
    this.calculateTrueShootingPercentage(player);
  }

  calculateVal(player: PlayerStats){
    const points = player.pts;
    const rebounds = player.reb;
    const ast = player.ast;
    const stl = player.stl;
    const blk = player.blk;
    const succesfulShots = player.fg3m + player.fgm + player.ftm;
    const missedShots = (player.fg3a - player.fg3m) +
      (player.fga - player.fgm) + (player.fta - player.ftm);
    const tov = player.tov;
    player.val = (points + rebounds + ast + stl + blk + succesfulShots - missedShots - tov) / 82;
  }

  calculateEFF(player: PlayerStats) {
    const points = player.pts;
    const rebounds = player.reb;
    const ast = player.ast;
    const stl = player.stl;
    const blk = player.blk;
    const missedShots = (player.fg3a - player.fg3m) +
      (player.fga - player.fgm) + (player.fta - player.ftm);
    const tov = player.tov;
    const EFF = points + rebounds + ast + stl + blk - missedShots - tov;
    player.EFF_PerGame = EFF / player.gp;
    player.EFF_PerMinute = (EFF / player.min) * 48;
  }

  calculatePointsCreated(player: PlayerStats) {
    player.pointsCreated = (player.pts + (1.42 * player.ast)) / player.gp;
  }

  calculateTrueShootingPercentage(player: PlayerStats) {
    const fieldShotsAttempted = player.fg3a + player.fga
    const freeShotsAttempted = player.fta;
    const TS = player.pts / (2*(fieldShotsAttempted + 0.44*freeShotsAttempted));
    player.trueShootingPercentage = TS*100;
  }

  initializeBarChart(player: PlayerStats){
    if(this.barChart){
      this.barChart.destroy(); // lo eliminamos si existe y creamos uno nuevo
    }
    const barChartCanvas = document.getElementById("barChart") as HTMLCanvasElement;
    if(barChartCanvas){
      const ctx = barChartCanvas.getContext('2d');

      const barChartData = {
        labels: ["Valoración", "EFF por partido", "Puntos creados", "Porcentaje real de tiro"],
        datasets: [
          {
            label: player.playerName,
            data: [player.val, player.EFF_PerGame, player.pointsCreated, player.trueShootingPercentage],
            backgroundColor: [
              (player.val < 1000) ? 'red' : (player.val < 2000) ? 'yellow' : 'green',
              (player.EFF_PerGame < 15) ? 'red' : (player.EFF_PerGame < 20) ? 'yellow' : 'green',
              (player.pointsCreated < 1000) ? 'red' : (player.pointsCreated < 2000) ? 'yellow' : 'green',
              (player.trueShootingPercentage < 30) ? 'red' : (player.trueShootingPercentage < 50) ? 'yellow' : 'green'
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
  }

  initializePieChart(player: PlayerStats){
    if(this.pieChart){
      this.pieChart.destroy(); // lo eliminamos si existe y creamos uno nuevo
    }
    const pieChartCanvas = document.getElementById("pieChart") as HTMLCanvasElement;

    if(pieChartCanvas){
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
          data: [player.dreb, player.pf, player.blk, player.oreb, player.ftm
            + player.fgm + player.fg3m, player.ast],
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
          type: 'pie' as ChartType,
          data: pieChartData
        });
      }

    }
  }

  initializeRadarChart(player: PlayerStats){
    if(this.radarChart){
      this.radarChart.destroy(); // Lo destruimos si ya existe y creamos uno nuevo
    }
    const radarChartCanvas = document.getElementById("radarChart") as HTMLCanvasElement;

    if(radarChartCanvas){
      const ctx = radarChartCanvas.getContext('2d');

      const radarChartData = {
        labels: [
          'tiros libres',
          'tiros de 2 puntos',
          'triples',
        ],
        datasets: [{
          label: 'tiros intentados',
          data: [player.fta, player.fga, player.fg3a],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'tiros anotados',
          data: [player.ftm, player.fgm, player.fg3m],
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
  }

  setAllPlayers(){
    // this.homeService.allPlayers.subscribe(data => {
    //   this.allPlayers = data.filter(player => player.playerId !== this.playerStats.playerId);
    // });
  }

  openMenuDialog(playerToCompare: PlayerStats){
    this.calculatePlayerPerformance(playerToCompare);
    this.comparativeDialog.open(ComparativePlayersDialogComponent, {
      width: '900px',
      height: '900px',
      data: {playerDetail: this.playerStats, playerToCompare: playerToCompare}
    })
  }

}
