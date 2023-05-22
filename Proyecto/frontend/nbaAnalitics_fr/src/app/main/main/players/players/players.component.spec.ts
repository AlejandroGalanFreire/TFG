import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './players.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PlayersComponent,
        FilterPipe
      ],
      imports: [
        HttpClientModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
