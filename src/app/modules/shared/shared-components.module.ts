import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatExpansionModule } from '@angular/material';
import { AppRoutingModule } from '../../modules/app-routing/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { TextUtilityService } from '../../services/utilities/text-utility.service';
import { ImageUtilityService } from '../../services/utilities/image-utility.service';
import { GalleriesRepositoryService } from '../../services/galleries-repository.service';
import { VideosRepositoryService } from '../../services/videos-repository.service';


import { FcImageSliderComponent } from '../../components/shared/fc-image-slider/fc-image-slider.component';
import { FcImageSliderNgxComponent } from '../../components/shared/fc-image-slider-ngx/fc-image-slider-ngx.component';
import { SocialNetworksLinksComponent } from '../../components/shared/social-networks-links/social-networks-links.component';
import { GalleryAddComponent } from '../../components/shared/gallery-add/gallery-add.component';
import { MediaAddComponent } from '../../components/shared/media-add/media-add.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    TranslateModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    NgxGalleryModule
  ],
  declarations: [
    FcImageSliderComponent,
    FcImageSliderNgxComponent,
    SocialNetworksLinksComponent,
    GalleryAddComponent,
    MediaAddComponent
  ],
  providers: [
    TextUtilityService,
    ImageUtilityService,
    GalleriesRepositoryService,
    VideosRepositoryService
  ],
  exports: [
    FcImageSliderComponent,
    FcImageSliderNgxComponent,
    SocialNetworksLinksComponent,
    GalleryAddComponent,
    MediaAddComponent
  ]
})
export class SharedComponentsModule { }
