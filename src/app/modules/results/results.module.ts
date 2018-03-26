import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from '../../components/results/matches/matches.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { StandingsViewComponent } from '../../components/results/standings-view/standings-view.component';


@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    TranslateModule
  ],
  declarations: [
    MatchesComponent,
    StandingsViewComponent
  ],
  exports: [
    MatchesComponent
  ]
})
export class ResultsModule { }
