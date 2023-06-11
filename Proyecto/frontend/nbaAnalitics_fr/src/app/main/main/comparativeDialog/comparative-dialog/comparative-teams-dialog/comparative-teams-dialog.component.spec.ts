import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeTeamsDialogComponent } from './comparative-teams-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

describe('ComparativeTeamsDialogComponent', () => {
  let component: ComparativeTeamsDialogComponent;
  let fixture: ComponentFixture<ComparativeTeamsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComparativeTeamsDialogComponent],
      imports: [
        MatTooltipModule,
        MatDialogModule,
        MatIconModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
      .compileComponents();

    const teamDetailMock = [{
      teamName: 'team 1 year 1',
      pts: 50,
      gp: 10,
      ast: 8,
      reb: 18
    },
    {
      teamName: 'team 1 year 2',
      pts: 50,
      gp: 10,
      ast: 8,
      reb: 18
    },
    {
      teamName: 'team 1 year 3',
      pts: 50,
      gp: 10,
      ast: 8,
      reb: 18
    },
    {
      teamName: 'team 1 year 4',
      pts: 50,
      gp: 10,
      ast: 8,
      reb: 18
    },
    {
      teamName: 'team 1 year 5',
      pts: 50,
      gp: 10,
      ast: 8,
      reb: 18
    }
    ];
    const teamToCompareMock = {
      teamName: 'team 2',
      pts: 50,
      gp: 10,
      ast: 8,
      reb: 18
    };

    fixture = TestBed.createComponent(ComparativeTeamsDialogComponent);
    component = fixture.componentInstance;
    component.data.teamDetail = teamDetailMock;
    component.data.teamToCompare = teamToCompareMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
