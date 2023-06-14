import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDetailComponent } from './match-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MatchDetailComponent', () => {
  let component: MatchDetailComponent;
  let fixture: ComponentFixture<MatchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchDetailComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create initLineChart', () => {
    const spy = spyOn(component, 'initLineChart').and.callThrough();
    const team1 = {
      team_name: 'Team 1',
      period1Score: 10,
      period2Score: 20,
      period3Score: 15,
      period4Score: 12
    };

    const team2 = {
      team_name: 'Team 2',
      period1Score: 8,
      period2Score: 18,
      period3Score: 20,
      period4Score: 14
    };

    // Asignar los equipos mockeados a las variables en el componente
    component.initLineChart(team1, team2);
    expect(spy).toHaveBeenCalled();
  });

  it('should create initBarChart', () => {
    const spy = spyOn(component, 'initBarChart').and.callThrough();
    const team1 = {
      team_name: 'Team 2',
      ast: 8,
      reb: 18,
      stl: 20
    };
    const team2 = {
      team_name: 'Team 2',
      ast: 8,
      reb: 18,
      stl: 20
    };
    component.initBarChart(team1, team2);
    expect(spy).toHaveBeenCalled();
  });

  it('should create initRadarChart', () => {
    const spy = spyOn(component, 'initRadarChart').and.callThrough();
    const team1 = {
      team_name: 'Team 2',
      fg_pct: 8,
      ft_pct: 18,
      fg3_pct: 20
    };
    const team2 = {
      team_name: 'Team 2',
      fg_pct: 8,
      ft_pct: 18,
      fg3_pct: 20
    };
    component.initRadarChart(team1, team2);
    expect(spy).toHaveBeenCalled();
  });
});
