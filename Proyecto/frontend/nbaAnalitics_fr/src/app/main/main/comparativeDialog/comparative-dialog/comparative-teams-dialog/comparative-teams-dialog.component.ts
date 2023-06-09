import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-comparative-teams-dialog',
  templateUrl: './comparative-teams-dialog.component.html',
  styleUrls: ['./comparative-teams-dialog.component.scss']
})
export class ComparativeTeamsDialogComponent {

  private barChart: any;

  constructor(
    public dialogRef: MatDialogRef<ComparativeTeamsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.initializeBarChart();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeBarChart() {
    const barChartCanvas = document.getElementById("barChartComparativeTeams") as HTMLCanvasElement;
    const ctx = barChartCanvas.getContext('2d');

    const barChartData = {
      labels: ["PPP", "APP", "RePP"],
      datasets: [
        {
          label: this.data.teamDetail[4].teamName,
          data: [(this.data.teamDetail[4].pts / this.data.teamDetail[4].gp).toFixed(2), (this.data.teamDetail[4].ast / this.data.teamDetail[4].gp).toFixed(2),
          (this.data.teamDetail[4].reb / this.data.teamDetail[4].gp).toFixed(2)],
          backgroundColor: ['#df94a0']
        },
        {
          label: this.data.teamToCompare.teamName,
          data: [(this.data.teamToCompare.pts / this.data.teamToCompare.gp).toFixed(2), (this.data.teamToCompare.ast / this.data.teamToCompare.gp).toFixed(2),
          (this.data.teamToCompare.reb / this.data.teamToCompare.gp).toFixed(2)],
          backgroundColor: ['#af6d78']
        }
      ]
    };

    if (ctx) {
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        plugins: [ChartDataLabels],
        options: {
          indexAxis: 'y',
          plugins: {
            datalabels: {
              anchor: 'center',
              align: 'center',
              color: 'white'
            },
            legend: {
              labels: {
                color: 'white'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: 'white'
              },
              grid: {
                color: 'white'
              }
            },
            y: {
              ticks: {
                color: 'white'
              },
              grid: {
                color: 'white'
              }
            },
          }
        }
      });
    }
  }

  getRound(numberToRound: number): string {
    return numberToRound.toFixed(2);
  }

}
