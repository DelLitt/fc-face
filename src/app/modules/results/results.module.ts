import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from '../../components/results/matches/matches.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MatchesComponent
  ],
  exports: [
    MatchesComponent
  ]
})
export class ResultsModule { }
