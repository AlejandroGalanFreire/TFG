import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailComponent } from './player-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

describe('PlayerDetailComponent', () => {
  let component: PlayerDetailComponent;
  let fixture: ComponentFixture<PlayerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerDetailComponent],
      imports: [HttpClientModule,
        MatDialogModule,
        MatTooltipModule,
        MatIconModule],
      providers: [MatDialog],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlayerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create calculatePlayerPerformance', () => {
    const spy = spyOn(component, 'calculatePlayerPerformance').and.callThrough();

    const playerStats = {
      id: 1,
      playerId: 1,
      playerName: 'Lebron',
      nickname: 'James',
      teamId: 1,
      teamAbbrev: 'LAK',
      age: 35,
      gp: 1,
      won: 1,
      lost: 0,
      wonPct: 100,
      fgm: 1,
      fga: 1,
      fgPct: 1,
      fg3m: 1,
      fg3a: 1,
      fg3Pct: 1,
      ftm: 1,
      fta: 1,
      ftPct: 1,
      oreb: 1,
      dreb: 1,
      reb: 1,
      ast: 1,
      tov: 1,
      stl: 1,
      blk: 1,
      blka: 1,
      pf: 1,
      pts: 1,
      min: 1,
      urlPicture: 'no tiene',
      val: 1,
      EFF_PerGame: 1,
      EFF_PerMinute: 1,
      pointsCreated: 1,
      trueShootingPercentage: 1,
      country: '1',
      height: '1',
      weight: '1',
      seasonExp: 1,
      jersey: '1',
      position: '1',
    };

    component.calculatePlayerPerformance(playerStats);

    expect(playerStats.val).toEqual(7);
    expect(playerStats.EFF_PerGame).toEqual(4);
    expect(parseInt(playerStats.pointsCreated.toFixed(0))).toEqual(2);
    expect(parseInt(playerStats.trueShootingPercentage.toFixed(0))).toEqual(20);
    expect(spy).toHaveBeenCalled();
  });

  it('should create obtainEFFColor green', () => {
    const spy = spyOn(component, 'obtainEFFColor').and.callThrough();
    const color = component.obtainEFFColor(21);
    expect(color).toEqual('green');
    expect(spy).toHaveBeenCalled();
  });

  it('should create obtainEFFColor yellow', () => {
    const spy = spyOn(component, 'obtainEFFColor').and.callThrough();
    const color = component.obtainEFFColor(16);
    expect(color).toEqual('yellow');
    expect(spy).toHaveBeenCalled();
  });

  it('should create obtainEFFColor red', () => {
    const spy = spyOn(component, 'obtainEFFColor').and.callThrough();
    const color = component.obtainEFFColor(5);
    expect(color).toEqual('red');
    expect(spy).toHaveBeenCalled();
  });

  it('should create obtainPointCreatedColor green', () => {
    const spy = spyOn(component, 'obtainPointCreatedColor').and.callThrough();
    const color = component.obtainPointCreatedColor(2100);
    expect(color).toEqual('green');
    expect(spy).toHaveBeenCalled();
  });

  it('should create obtainPointCreatedColor yellow', () => {
    const spy = spyOn(component, 'obtainPointCreatedColor').and.callThrough();
    const color = component.obtainPointCreatedColor(1600);
    expect(color).toEqual('yellow');
    expect(spy).toHaveBeenCalled();
  });

  it('should create obtainPointCreatedColor red', () => {
    const spy = spyOn(component, 'obtainPointCreatedColor').and.callThrough();
    const color = component.obtainPointCreatedColor(5);
    expect(color).toEqual('red');
    expect(spy).toHaveBeenCalled();
  });

  it('should create obtaintrueShootingPercentageColor green', () => {
    const spy = spyOn(component, 'obtaintrueShootingPercentageColor').and.callThrough();
    const color = component.obtaintrueShootingPercentageColor(55);
    expect(color).toEqual('green');
    expect(spy).toHaveBeenCalled();
  });

  it('should create obtaintrueShootingPercentageColor yellow', () => {
    const spy = spyOn(component, 'obtaintrueShootingPercentageColor').and.callThrough();
    const color = component.obtaintrueShootingPercentageColor(35);
    expect(color).toEqual('yellow');
    expect(spy).toHaveBeenCalled();
  });

  it('should create obtaintrueShootingPercentageColor red', () => {
    const spy = spyOn(component, 'obtaintrueShootingPercentageColor').and.callThrough();
    const color = component.obtaintrueShootingPercentageColor(5);
    expect(color).toEqual('red');
    expect(spy).toHaveBeenCalled();
  });

  it('should create setAllPlayers', () => {
    const spy = spyOn(component, 'setAllPlayers').and.callThrough();
    component.setAllPlayers();
    expect(spy).toHaveBeenCalled();
  });

  it('should create openMenuDialog', () => {
    const spy = spyOn(component, 'openMenuDialog').and.callThrough();
    component.openMenuDialog(5);
    expect(spy).toHaveBeenCalled();
  });

  it('should create getHeightVal', () => {
    const spy = spyOn(component, 'getHeightVal').and.callThrough();
    component.player.val = 2005
    const height = component.getHeightVal();
    expect(height).toEqual(100);
    expect(spy).toHaveBeenCalled();
  });

  it('should create getHeightVal', () => {
    const spy = spyOn(component, 'getHeightVal').and.callThrough();
    component.player.val = 1005
    const height = component.getHeightVal();
    expect(height).toEqual(66);
    expect(spy).toHaveBeenCalled();
  });

  it('should create getHeightVal', () => {
    const spy = spyOn(component, 'getHeightVal').and.callThrough();
    component.player.val = 4
    const height = component.getHeightVal();
    expect(height).toEqual(33);
    expect(spy).toHaveBeenCalled();
  });

  it('should create getColorVal green', () => {
    const spy = spyOn(component, 'getColorVal').and.callThrough();
    component.player.val = 2005
    const color = component.getColorVal();
    expect(color).toEqual('green');
    expect(spy).toHaveBeenCalled();
  });

  it('should create getColorVal yellow', () => {
    const spy = spyOn(component, 'getColorVal').and.callThrough();
    component.player.val = 1005
    const color = component.getColorVal();
    expect(color).toEqual('yellow');
    expect(spy).toHaveBeenCalled();
  });

  it('should create getColorVal red', () => {
    const spy = spyOn(component, 'getColorVal').and.callThrough();
    component.player.val = 4
    const color = component.getColorVal();
    expect(color).toEqual('red');
    expect(spy).toHaveBeenCalled();
  });

  it('should create initializeBarChart', () => {
    const spy = spyOn(component, 'initializeBarChart').and.callThrough();
    const playerMock = {
      playerName: "Fede",
      EFF_PerGame: 20,
      pointsCreated: 15,
      trueShootingPercentage: 12
    };

    // Asignar los equipos mockeados a las variables en el componente
    component.initializeBarChart(playerMock);
    expect(spy).toHaveBeenCalled();
  });

  it('should create initializePieChart', () => {
    const spy = spyOn(component, 'initializePieChart').and.callThrough();
    const playerMock = {
      dreb: 2,
      pf: 20,
      blk: 15,
      oreb: 12,
      ftm: 2,
      fgm: 20,
      fg3m: 15,
      ast: 12
    };

    // Asignar los equipos mockeados a las variables en el componente
    component.initializePieChart(playerMock);
    expect(spy).toHaveBeenCalled();
  });

  it('should create initializeRadarChart', () => {
    const spy = spyOn(component, 'initializeRadarChart').and.callThrough();
    const playerMock = {
      fta: 2,
      fga: 20,
      fg3a: 15,
      ftm: 2,
      fgm: 20,
      fg3m: 15
    };

    // Asignar los equipos mockeados a las variables en el componente
    component.initializeRadarChart(playerMock);
    expect(spy).toHaveBeenCalled();
  });


});
