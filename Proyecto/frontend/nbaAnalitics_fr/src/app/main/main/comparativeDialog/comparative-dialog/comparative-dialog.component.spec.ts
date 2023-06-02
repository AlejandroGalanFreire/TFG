import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeDialogComponent } from './comparative-dialog.component';

describe('ComparativeDialogComponent', () => {
  let component: ComparativeDialogComponent;
  let fixture: ComponentFixture<ComparativeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparativeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
