import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { SharedComponentsModule } from '../../modules/shared/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { PublicationsRepositoryService } from '../../services/publications-repository.service';
import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';
import { PublicationsListComponent } from '../../components/publications/publications-list/publications-list.component';
import { PublicationDetailsComponent } from '../../components/publications/publication-details/publication-details.component';
import { FcMatPaginatorIntl } from '../../model/app/fc-paginator-intl';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    SharedComponentsModule,
    TranslateModule
  ],
  declarations: [
    PublicationViewComponent,
    PublicationsListComponent,
    PublicationDetailsComponent
  ],
  providers: [
    PublicationsRepositoryService,
    {
      provide: MatPaginatorIntl,
      useClass: FcMatPaginatorIntl
    }
  ],
  exports: [
    PublicationViewComponent
  ]
})
export class PublicationComponentsModule { }
