import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailComponent } from './player-detail.component';

describe('PlayerDetailComponent', () => {
  let component: PlayerDetailComponent;
  let fixture: ComponentFixture<PlayerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDetailComponent ]
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
    component.calculatePlayerPerformance();
    expect(spy).toHaveBeenCalled();
  });
});
