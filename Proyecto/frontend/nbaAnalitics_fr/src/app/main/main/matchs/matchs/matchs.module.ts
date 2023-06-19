import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchsComponent } from './matchs.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatchsRoutingModule } from './matchs-routing.module';



@NgModule({
  declarations: [
    MatchsComponent,
    MatchDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    MatInputModule,
    MatTooltipModule,
    MatchsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MatchsModule { }
