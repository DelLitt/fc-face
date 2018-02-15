import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatExpansionModule } from '@angular/material';
import { AppRoutingModule } from '../../modules/app-routing/app-routing.module';
import { CarouselModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { TextUtilityService } from '../../services/utilities/text-utility.service';
import { ImageUtilityService } from '../../services/utilities/image-utility.service';

import { FcImageSliderComponent } from '../../components/shared/fc-image-slider/fc-image-slider.component';
import { FcImageSliderNgxComponent } from '../../components/shared/fc-image-slider-ngx/fc-image-slider-ngx.component';
import { SocialNetworksLinksComponent } from '../../components/shared/social-networks-links/social-networks-links.component';
import { GalleryAddComponent } from '../../components/shared/gallery-add/gallery-add.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    NgxGalleryModule
  ],
  declarations: [
    FcImageSliderComponent,
    FcImageSliderNgxComponent,
    SocialNetworksLinksComponent,
    GalleryAddComponent
  ],
  providers: [
    TextUtilityService,
    ImageUtilityService
  ],
  exports: [
    FcImageSliderComponent,
    FcImageSliderNgxComponent,
    SocialNetworksLinksComponent,
    GalleryAddComponent
  ]
})
export class SharedComponentsModule { }
