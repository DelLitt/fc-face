import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FcImageSliderComponent } from '../../components/shared/fc-image-slider/fc-image-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FcImageSliderComponent
  ],
  exports: [
    FcImageSliderComponent
  ]
})
export class SharedComponentsModule { }
