import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ClasificationComponent } from './clasification.component';
import { MatMenuModule } from '@angular/material/menu';

describe('ClasificationComponent', () => {
  let component: ClasificationComponent;
  let fixture: ComponentFixture<ClasificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasificationComponent],
      imports: [HttpClientModule,
        MatMenuModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClasificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create resetIndex', () => {
    const spy = spyOn(component, 'resetIndex').and.callThrough();
    component.resetIndex();
    expect(component.currentIndex).toEqual(0);
    expect(spy).toHaveBeenCalled();
  });

  it('should create getIndex', () => {
    const spy = spyOn(component, 'getIndex').and.callThrough();
    component.resetIndex();
    expect(component.getIndex()).toEqual(1);
    expect(spy).toHaveBeenCalled();
  });


});
