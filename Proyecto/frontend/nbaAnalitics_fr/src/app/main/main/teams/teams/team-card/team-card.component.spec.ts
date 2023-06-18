import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCardComponent } from './team-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TeamByYear } from 'src/app/models/teamByYear';

describe('TeamCardComponent', () => {
  let component: TeamCardComponent;
  let fixture: ComponentFixture<TeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCardComponent ],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create obtainTemplate', () => {
    const spy = spyOn(component, 'obtainTemplate').and.callThrough();
    component.obtainTemplate(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should create setTeamSelectedDetail teamStatsByYear vacío', () => {
    const spy = spyOn(component, 'setTeamSelectedDetail').and.callThrough();
    component.teamsStatsByYear = [];
    component.setTeamSelectedDetail(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should create setTeamSelectedDetail teamStatsByYear NO vacío', () => {
    const spy = spyOn(component, 'setTeamSelectedDetail').and.callThrough();
    component.teamsStatsByYear = [];
    const year1 = new TeamByYear();
    year1.teamId = 1;
    const year2 = new TeamByYear();
    year1.teamId = 1;
    const year3 = new TeamByYear();
    year1.teamId = 1;
    const year4 = new TeamByYear();
    year1.teamId = 1;
    const year5 = new TeamByYear();
    year1.teamId = 1;
    const year6 = new TeamByYear();
    year1.teamId = 1;

    component.teamsStatsByYear.push(year1);
    component.teamsStatsByYear.push(year2);
    component.teamsStatsByYear.push(year3);
    component.teamsStatsByYear.push(year4);
    component.teamsStatsByYear.push(year5);
    component.teamsStatsByYear.push(year6);


    component.setTeamSelectedDetail(1);
    expect(spy).toHaveBeenCalled();
  });

});
