import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { SharedComponentsModule } from '../../modules/shared/shared-components.module';
import { PublicationsRepositoryService } from '../../services/publications-repository.service';

import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';
import { PublicationDetailsComponent } from '../../components/publications/publication-details/publication-details.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedComponentsModule
  ],
  declarations: [
    PublicationViewComponent,
    PublicationDetailsComponent
  ],
  providers: [
    PublicationsRepositoryService
  ],
  exports: [
    PublicationViewComponent
  ]
})
export class PublicationComponentsModule { }
