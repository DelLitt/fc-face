import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectionViewComponent } from '../../components/club/direction-view/direction-view.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { CoachesViewComponent } from '../../components/club/coaches-view/coaches-view.component';


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedComponentsModule,
    TranslateModule,
  ],
  declarations: [
    DirectionViewComponent,
    CoachesViewComponent
  ]
})
export class ClubComponentsModule { }
