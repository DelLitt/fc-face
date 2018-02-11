import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';
import { PublicationDetailsComponent } from '../../components/publications/publication-details/publication-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PublicationViewComponent,
    PublicationDetailsComponent
  ],
  exports: [
    PublicationViewComponent
  ]
})
export class PublicationComponentsModule { }
