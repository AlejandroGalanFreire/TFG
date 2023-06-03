import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativePlayersDialogComponent } from './comparativePlayers-dialog.component';

describe('ComparativeDialogComponent', () => {
  let component: ComparativePlayersDialogComponent;
  let fixture: ComponentFixture<ComparativePlayersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativePlayersDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparativePlayersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
