import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeTeamsDialogComponent } from './comparative-teams-dialog.component';

describe('ComparativeTeamsDialogComponent', () => {
  let component: ComparativeTeamsDialogComponent;
  let fixture: ComponentFixture<ComparativeTeamsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativeTeamsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparativeTeamsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
