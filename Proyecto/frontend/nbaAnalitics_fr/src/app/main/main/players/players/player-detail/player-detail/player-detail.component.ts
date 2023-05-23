import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/main/main/services/home.service';
import { PlayerStats } from 'src/app/models/playerStats';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  private playerStats: PlayerStats = new PlayerStats();
  public val: number = 0; // rendimiento global del jugador
  public EFF_PerGame: number = 0; // eficiencia del jugador por partido
  public EFF_PerMinute: number = 0; // eficiencia del jugador por minuto
  public pointsCreated = 0; // puntos creados por el jugador a través de asistencias
  public trueShootingPercentage = 0; // porcentaje real de acierto en tiros

  constructor(private readonly homeService: HomeService){ }

  ngOnInit(): void {
    this.homeService.playerSelected.subscribe(data => {
      this.playerStats = data;
      // console.log(data);
      this.calculatePlayerPerformance();

      // creación de los gráficos
      // console.log(this.val)
      // console.log(this.EFF_PerGame)
      // console.log(this.EFF_PerMinute)
      // console.log(this.pointsCreated);
      // console.log(this.trueShootingPercentage);

    });
  }

  calculatePlayerPerformance(){
    this.calculateVal();
    this.calculatePER();
    this.calculatePointsCreated();
    this.calculateTrueShootingPercentage();
  }

  calculateVal(){
    const points = this.playerStats.pts;
    const rebounds = this.playerStats.reb;
    const ast = this.playerStats.ast;
    const stl = this.playerStats.stl;
    const blk = this.playerStats.blk;
    const succesfulShots = this.playerStats.fg3M + this.playerStats.fgm + this.playerStats.ftm;
    const missedShots = (this.playerStats.fg3A - this.playerStats.fg3M) +
      (this.playerStats.fga - this.playerStats.fgm) + (this.playerStats.fta - this.playerStats.ftm);
    const tov = this.playerStats.tov;
    this.val = points + rebounds + ast + stl + blk + succesfulShots - missedShots - tov;
  }

  calculatePER() {
    const points = this.playerStats.pts;
    const rebounds = this.playerStats.reb;
    const ast = this.playerStats.ast;
    const stl = this.playerStats.stl;
    const blk = this.playerStats.blk;
    const missedShots = (this.playerStats.fg3A - this.playerStats.fg3M) +
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
    const fieldShotsAttempted = this.playerStats.fg3A + this.playerStats.fga
    const freeShotsAttempted = this.playerStats.fta;
    const TS = this.playerStats.pts / (2*(fieldShotsAttempted + 0.44*freeShotsAttempted));
    this.trueShootingPercentage = 100 - TS;
  }
}
