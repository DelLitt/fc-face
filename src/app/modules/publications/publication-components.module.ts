import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatExpansionModule } from '@angular/material';
import { SharedComponentsModule } from '../../modules/shared/shared-components.module';
import { PublicationsRepositoryService } from '../../services/publications-repository.service';
import { GalleriesRepositoryService } from '../../services/galleries-repository.service';

import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';
import { PublicationDetailsComponent } from '../../components/publications/publication-details/publication-details.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    SharedComponentsModule
  ],
  declarations: [
    PublicationViewComponent,
    PublicationDetailsComponent
  ],
  providers: [
    PublicationsRepositoryService,
    GalleriesRepositoryService
  ],
  exports: [
    PublicationViewComponent
  ]
})
export class PublicationComponentsModule { }
