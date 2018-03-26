import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectionViewComponent } from '../../components/club/direction-view/direction-view.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { CoachesViewComponent } from '../../components/club/coaches-view/coaches-view.component';
import { MedicsViewComponent } from '../../components/club/medics-view/medics-view.component';
import { SpecialistsViewComponent } from '../../components/club/specialists-view/specialists-view.component';


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedComponentsModule,
    TranslateModule,
  ],
  declarations: [
    DirectionViewComponent,
    CoachesViewComponent,
    MedicsViewComponent,
    SpecialistsViewComponent
  ]
})
export class ClubComponentsModule { }
