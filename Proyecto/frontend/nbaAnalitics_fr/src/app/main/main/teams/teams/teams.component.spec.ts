import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TeamsComponent } from './teams.component';
import { FilterTeamsPipe } from 'src/app/pipes/teamPipes/filterTeams.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsComponent,
      FilterTeamsPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
