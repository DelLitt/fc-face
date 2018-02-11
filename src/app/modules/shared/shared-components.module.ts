import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../modules/app-routing/app-routing.module';
import { CarouselModule } from 'ngx-bootstrap';
import { FcImageSliderComponent } from '../../components/shared/fc-image-slider/fc-image-slider.component';
import { FcImageSliderNgxComponent } from '../../components/shared/fc-image-slider-ngx/fc-image-slider-ngx.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    FcImageSliderComponent,
    FcImageSliderNgxComponent
  ],
  exports: [
    FcImageSliderComponent,
    FcImageSliderNgxComponent
  ]
})
export class SharedComponentsModule { }
