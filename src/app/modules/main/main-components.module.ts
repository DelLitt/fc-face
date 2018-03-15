import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { HomeViewComponent } from '../../components/main/home-view/home-view.component';
import { SharedComponentsModule } from '../../modules/shared/shared-components.module';
import { DataSourceService, FakeDataSourceService } from '../../services/data-source.service';
import { PublicationsRepositoryService } from '../../services/publications-repository.service';
import { TextUtilityService } from '../../services/utilities/text-utility.service';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  providers: [
    TextUtilityService,
    {
      provide: DataSourceService,
      useClass: FakeDataSourceService
    },
    PublicationsRepositoryService
  ],
  declarations: [
    HomeViewComponent
  ],
  exports: [
    HomeViewComponent
  ]
})
export class MainComponentsModule { }
