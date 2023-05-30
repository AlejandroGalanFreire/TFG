import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/main/main/services/home.service';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.scss']
})
export class TeamsDetailComponent implements OnInit {

  public teamStatsByYear: TeamStatsByYear[] = [];
  private lineChart: any;
  private barChart: any;
  private radarChart: any;
  private firstYear = this.teamStatsByYear[0];
  private secondYear = this.teamStatsByYear[1];
  private thirdYear = this.teamStatsByYear[2];
  private fourthYear = this.teamStatsByYear[3];
  private fifthYear = this.teamStatsByYear[4];

  constructor(private readonly homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.teamSelected.subscribe(data => {
      this.teamStatsByYear = data;
      this.firstYear = this.teamStatsByYear[0];
      this.secondYear = this.teamStatsByYear[1];
      this.thirdYear = this.teamStatsByYear[2];
      this.fourthYear = this.teamStatsByYear[3];
      this.fifthYear = this.teamStatsByYear[4];

      // creación de los gráficos
      this.initLineChart();
      this.initBarChart();
      this.initRadarChart();
    });
  }

  getColorByFinal(item: TeamStatsByYear): string {
    if(item.nbaFinalsAppearance === 'LEAGUE CHAMPION'){
      return 'green'
    }else if(item.nbaFinalsAppearance === 'FINALS APPEARANCE'){
      return 'yellow'
    }
    return 'red';
  }

  initLineChart() {
    const lineChartCanvas = document.getElementById("lineChart") as HTMLCanvasElement;
    const ctx = lineChartCanvas.getContext('2d');

    const lineChartData = {
      labels: ["1º Año", "2º Año", "3º Año", "4º Año", "5º Año"],
      datasets: [
        {
          label: "Victorias",
          data: [this.firstYear.wins, this.secondYear.wins, this.thirdYear.wins, this.fourthYear.wins, this.fifthYear.wins]
        },
        {
          label: "Derrotas",
          data: [this.firstYear.losses, this.secondYear.losses, this.thirdYear.losses, this.fourthYear.losses, this.fifthYear.losses]
        },
        {
          label: "Clasificación conferencia",
          data: [this.firstYear.confRank, this.secondYear.confRank, this.thirdYear.confRank, this.fourthYear.confRank, this.fifthYear.confRank]
        },
        {
          label: "Clasificación division",
          data: [this.firstYear.divRank, this.secondYear.divRank, this.thirdYear.divRank, this.fourthYear.divRank, this.fifthYear.divRank]
        }
      ],
      options: {
        responsive: true
      }
    };

    if (ctx) {
      this.lineChart = new Chart(ctx, {
        type: 'line',
        data: lineChartData,
      });
    }
  }

  initBarChart() {
    const barChartCanvas = document.getElementById("barChartAst") as HTMLCanvasElement;
    const ctx = barChartCanvas.getContext('2d');

    const barChartData = {
      labels: ["Asistencias", "Rebotes", "Bloqueos", "Robos", "Pérdidas"],
      datasets: [
        {
          label: "1º Año",
          data: [this.firstYear.ast, this.firstYear.reb, this.firstYear.blk, this.firstYear.stl, this.firstYear.tov]
        },
        {
          label: "2º Año",
          data: [this.secondYear.reb, this.secondYear.reb, this.secondYear.blk, this.secondYear.stl, this.secondYear.tov]
        },
        {
          label: "3º Año",
          data: [this.thirdYear.ast, this.thirdYear.reb, this.thirdYear.blk, this.thirdYear.stl, this.thirdYear.tov]
        },
        {
          label: "4º Año",
          data: [this.fourthYear.ast, this.fourthYear.reb, this.fourthYear.blk, this.fourthYear.stl, this.fourthYear.tov]
        },
        {
          label: "5º Año",
          data: [this.fifthYear.ast, this.fifthYear.reb, this.fifthYear.blk, this.fifthYear.stl, this.fifthYear.tov]
        }
      ]
    };

    if (ctx) {
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
      });
    }
  }

  initRadarChart(){
    const radarChartCanvas = document.getElementById("radarChart") as HTMLCanvasElement;
    const ctx = radarChartCanvas.getContext('2d');

    const radarChartData = {
      labels: ["Tiros","Tiros libres", "Triples"],
      datasets: [
        {
          label: this.fifthYear.teamName,
          data: [this.fifthYear.fga * 100, this.fifthYear.fta * 100, this.fifthYear.fg3a * 100]
        },
        {
          label: this.fifthYear.teamName,
          data: [this.fifthYear.fgm * 100, this.fifthYear.ftm * 100, this.fifthYear.fg3m * 100]
        }
      ]
    };

    if(ctx){
      this.radarChart = new Chart(ctx, {
        type: 'radar',
        data: radarChartData,
      });
    }
  }

}
