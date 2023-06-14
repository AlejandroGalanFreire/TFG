import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaTeamComponent } from './plantilla-team.component';

describe('PlantillaTeamComponent', () => {
  let component: PlantillaTeamComponent;
  let fixture: ComponentFixture<PlantillaTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
