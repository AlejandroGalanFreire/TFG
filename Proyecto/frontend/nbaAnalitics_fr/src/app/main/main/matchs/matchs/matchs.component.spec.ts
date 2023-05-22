import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatchsComponent } from './matchs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MatchsComponent', () => {
  let component: MatchsComponent;
  let fixture: ComponentFixture<MatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
         MatchsComponent,
        ],
      imports: [
        HttpClientModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
