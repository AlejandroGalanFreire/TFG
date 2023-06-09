import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from 'src/app/main/main/services/home.service';
import { PlayerStats } from 'src/app/models/playerStats';
import Chart from 'chart.js/auto';
import { DataService } from 'src/app/services/data-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ComparativePlayersDialogComponent } from 'src/app/main/main/comparativeDialog/comparative-dialog/comparativePlayers-dialog.component';
import { ChartType } from 'chart.js';
import { Subscription } from 'rxjs';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { PlayerInfo } from 'src/app/models/playerInfo';

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
  public allPlayers: PlayerInfo[] = [];
  filterPlayers = '';
  playerSelectedSubscription!: Subscription;
  playerByIdSubscription!: Subscription;
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
  playerToCompareSubscription!: Subscription;


  constructor(private dataService: DataService,
    private readonly homeService: HomeService,
    public comparativeDialog: MatDialog){ }

  ngOnDestroy(): void {
    this.playerSelectedSubscription.unsubscribe();
    this.playerByIdSubscription.unsubscribe();
    if(this.playerToCompareSubscription){
      this.playerToCompareSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    Chart.defaults.font.size = 18;

    this.playerSelectedSubscription = this.homeService.playerSelected.subscribe(data => {
      this.playerByIdSubscription = this.dataService.getPlayerStatsById(data).subscribe(
        (resp: any) => {
          this.playerStats = JSON.parse(resp);

          this.calculatePlayerPerformance(this.playerStats);

          // creación de los gráficos
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
    player.val = (points + rebounds + ast + stl + blk + succesfulShots - missedShots - tov);
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
        labels: ["EFF por partido", "Puntos creados", "Porcentaje real de tiro"],
        datasets: [
          {
            label: player.playerName,
            data: [player.EFF_PerGame, player.pointsCreated, player.trueShootingPercentage],
            backgroundColor: [
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
          options: {
            plugins: {
              legend: {
                labels: {
                  usePointStyle: true,
                  pointStyle: 'circle'
                }
              }
            },
            responsive: true
          }
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
          'Rebotes defensivos',
          'Faltas',
          'Bloqueos',
          'Rebotes ofensivos',
          'Tiros anotados',
          'Asistencias'
        ],
        datasets: [{
          label: 'Valor',
          data: [player.dreb, player.pf, player.blk, player.oreb, player.ftm
            + player.fgm + player.fg3m, player.ast],
          backgroundColor: [
            '#ffc0cb',
            '#df94a0',
            '#af6d78',
            '#580058',
            '#800080',
            '#a300a3'
          ],
          hoverOffset: 4
        }]
      };

      if(ctx){
        this.pieChart = new Chart(ctx, {
          type: 'pie' as ChartType,
          data: pieChartData,
          options: {
            plugins: {
              legend: {
                labels: {
                  usePointStyle: true,
                  pointStyle: 'circle'
                }
              }
            },
            responsive: true
          }
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
          backgroundColor: '#da41674d',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'tiros anotados',
          data: [player.ftm, player.fgm, player.fg3m],
          fill: true,
          backgroundColor: '#036180a6',
          borderColor: '#036180',
          pointBackgroundColor: '#036180',
          pointBorderColor: '#036180',
          pointHoverBackgroundColor: '#036180',
          pointHoverBorderColor: '#036180'
        }]
      };

      if(ctx){
        this.radarChart = new Chart(ctx, {
          type: 'radar',
          data: radarChartData,
          options: {
            plugins: {
              legend: {
                labels: {
                  usePointStyle: true,
                  pointStyle: 'circle'
                }
              }
            },
            responsive: true
          }
        });
      }

    }
  }

  setAllPlayers(){
    this.homeService.allPlayers.subscribe(data => {
      this.allPlayers = data.filter(player => parseInt(player.playerId) !== this.playerStats.playerId);
    });
  }

  openMenuDialog(playerToCompareId: string){
    let playerToCompare = new PlayerStats();
    this.playerToCompareSubscription = this.dataService.getPlayerStatsById(playerToCompareId).subscribe((data) => {
      playerToCompare = JSON.parse(data);
      this.calculatePlayerPerformance(playerToCompare);
      this.comparativeDialog.open(ComparativePlayersDialogComponent, {
        width: '900px',
        height: '900px',
        panelClass: 'dialogoComparacionJugadores',
        data: {playerDetail: this.playerStats, playerToCompare: playerToCompare}
      })
    });

  }

  getHeightVal(){
    return this.playerStats.val < 1000 ? 33 : this.playerStats.val < 2000? 66 : 100
  }

  getColorVal(){
    return this.playerStats.val < 1000 ? 'red' : this.playerStats.val < 2000? 'yellow' : 'green'
  }

}
