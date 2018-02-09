import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBlockFirstComponent } from '../../components/main/main-block-first/main-block-first.component';
import { MainSliderComponent } from '../../components/main/main-slider/main-slider.component';
import { SharedComponentsModule } from '../../modules/shared/shared-components.module';
import { DataSourceService, FakeDataSourceService } from '../../services/data-source.service';
import { PublicationsRepositoryService } from '../../services/publications-repository.service';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  providers: [
    {
      provide: DataSourceService,
      useClass: FakeDataSourceService
    },
    PublicationsRepositoryService
  ],
  declarations: [
    MainBlockFirstComponent,
    MainSliderComponent
  ],
  exports: [
    MainBlockFirstComponent,
    MainSliderComponent
  ]
})
export class MainComponentsModule { }
