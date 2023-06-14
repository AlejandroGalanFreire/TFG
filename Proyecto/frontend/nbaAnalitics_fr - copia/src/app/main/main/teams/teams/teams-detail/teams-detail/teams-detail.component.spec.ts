import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsDetailComponent } from './teams-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';
import { MatIconModule } from '@angular/material/icon';

describe('TeamsDetailComponent', () => {
  let component: TeamsDetailComponent;
  let fixture: ComponentFixture<TeamsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsDetailComponent,
       ],
      imports: [HttpClientModule,
        MatDialogModule,
        MatTooltipModule,
        MatIconModule],
      providers: [MatDialog],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create getColorByFinal league champion', () => {
    const spy = spyOn(component, 'getColorByFinal').and.callThrough();
    const itemMock = new TeamStatsByYear()
    itemMock.nbaFinalsAppearance = 'LEAGUE CHAMPION';
    component.getColorByFinal(itemMock);
    expect(spy).toHaveBeenCalled();
  });

  it('should create getColorByFinal finals appearance', () => {
    const spy = spyOn(component, 'getColorByFinal').and.callThrough();
    const itemMock = new TeamStatsByYear()
    itemMock.nbaFinalsAppearance = 'FINALS APPEARANCE';
    component.getColorByFinal(itemMock);
    expect(spy).toHaveBeenCalled();
  });

  it('should create getColorByFinal N/A', () => {
    const spy = spyOn(component, 'getColorByFinal').and.callThrough();
    const itemMock = new TeamStatsByYear()
    itemMock.nbaFinalsAppearance = 'N/A';
    component.getColorByFinal(itemMock);
    expect(spy).toHaveBeenCalled();
  });

  it('should create initLineChart', () => {
    const spy = spyOn(component, 'initLineChart').and.callThrough();
    const year1 = {
      wins: 10,
      losses: 20,
      confRank: 15,
      divRank: 12
    };

    component.firstYear = year1;
    component.secondYear = year1;
    component.thirdYear = year1;
    component.fourthYear = year1;
    component.fifthYear = year1;

    // Asignar los equipos mockeados a las variables en el componente
    component.initLineChart();
    expect(spy).toHaveBeenCalled();
  });

  it('should create initBarChart', () => {
    const spy = spyOn(component, 'initBarChart').and.callThrough();
    const year1 = {
      ast: 10,
      reb: 20,
      blk: 15,
      stl: 12,
      tov: 5
    };

    component.firstYear = year1;
    component.secondYear = year1;
    component.thirdYear = year1;
    component.fourthYear = year1;
    component.fifthYear = year1;

    // Asignar los equipos mockeados a las variables en el componente
    component.initBarChart();
    expect(spy).toHaveBeenCalled();
  });

  it('should create initRadarChart', () => {
    const spy = spyOn(component, 'initRadarChart').and.callThrough();
    const year1 = {
      fga: 10,
      fta: 20,
      fg3a: 15,
      fgm: 10,
      ftm: 20,
      fg3m: 15
    };

    component.fifthYear = year1;

    // Asignar los equipos mockeados a las variables en el componente
    component.initRadarChart();
    expect(spy).toHaveBeenCalled();
  });

  it('should create initPlayOffChart', () => {
    const spy = spyOn(component, 'initPlayOffChart').and.callThrough();
    const year1 = {
      poWins: 10,
      poLosses: 20,
    };

    component.fifthYear = year1;

    // Asignar los equipos mockeados a las variables en el componente
    component.initPlayOffChart();
    expect(spy).toHaveBeenCalled();
  });

  it('should create setAllTeams', () => {
    const spy = spyOn(component, 'setAllTeams').and.callThrough();
    component.setAllTeams();
    expect(spy).toHaveBeenCalled();
  });

  it('should create openMenuDialog', () => {
    const spy = spyOn(component, 'openMenuDialog').and.callThrough();
    component.openMenuDialog(new TeamStatsByYear());
    expect(spy).toHaveBeenCalled();
  });

});
