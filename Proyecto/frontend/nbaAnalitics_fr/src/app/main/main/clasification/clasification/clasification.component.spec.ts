import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ClasificationComponent } from './clasification.component';

describe('ClasificationComponent', () => {
  let component: ClasificationComponent;
  let fixture: ComponentFixture<ClasificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificationComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
