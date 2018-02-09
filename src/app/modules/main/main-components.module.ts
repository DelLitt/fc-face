import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBlockFirstComponent } from '../../components/main/main-block-first/main-block-first.component';
import { MainSliderComponent } from '../../components/main/main-slider/main-slider.component';
import { SharedComponentsModule } from '../../modules/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule
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
