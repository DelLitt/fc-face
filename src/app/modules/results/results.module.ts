import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from '../../components/results/matches/matches.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    TranslateModule
  ],
  declarations: [
    MatchesComponent
  ],
  exports: [
    MatchesComponent
  ]
})
export class ResultsModule { }
