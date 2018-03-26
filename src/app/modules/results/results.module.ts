import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatchesViewComponent } from '../../components/results/matches-view/matches-view.component';
import { StandingsViewComponent } from '../../components/results/standings-view/standings-view.component';
import { PlayersStatisticsViewComponent } from '../../components/results/players-statistics-view/players-statistics-view.component';


@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    TranslateModule
  ],
  declarations: [
    MatchesViewComponent,
    StandingsViewComponent,
    PlayersStatisticsViewComponent
  ],
  exports: [
  ]
})
export class ResultsModule { }
