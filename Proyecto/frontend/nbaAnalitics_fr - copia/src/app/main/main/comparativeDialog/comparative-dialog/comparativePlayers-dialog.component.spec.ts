import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativePlayersDialogComponent } from './comparativePlayers-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

describe('ComparativePlayersDialogComponent', () => {
  let component: ComparativePlayersDialogComponent;
  let fixture: ComponentFixture<ComparativePlayersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativePlayersDialogComponent ],
      imports: [
        MatDialogModule,
        MatIconModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
    .compileComponents();

    const playerDetailMock = {
      playerName: 'player 1',
      pts: 50,
      gp: 10,
      ast: 8,
      reb: 18,
      EFF_PerGame: 20
    };
    const playerToCompareMock = {
      playerName: 'player 2',
      pts: 50,
      gp: 10,
      ast: 8,
      reb: 18,
      EFF_PerGame: 20
    };

    fixture = TestBed.createComponent(ComparativePlayersDialogComponent);
    component = fixture.componentInstance;
    component.data.playerDetail = playerDetailMock;
    component.data.playerToCompare = playerToCompareMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create initializeBarChart', () => {
    const spy = spyOn(component, 'initializeBarChart').and.callThrough();

    component.initializeBarChart();
    expect(spy).toHaveBeenCalled();
  });
});
