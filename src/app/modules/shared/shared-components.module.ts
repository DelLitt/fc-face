import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule
} from '@angular/material';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { AppRoutingModule } from '../../modules/app-routing/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';


import { TextUtilityService } from '../../services/utilities/text-utility.service';
import { ImageUtilityService } from '../../services/utilities/image-utility.service';
import { StringCacheUtilityService } from '../../services/utilities/string-cache-utility.service';
import { UrlUtilityService } from '../../services/utilities/url-utility.service';
import { GalleriesRepositoryService } from '../../services/galleries-repository.service';
import { VideosRepositoryService } from '../../services/videos-repository.service';


import { FcImageSliderComponent } from '../../components/shared/fc-image-slider/fc-image-slider.component';
import { FcImageSliderNgxComponent } from '../../components/shared/fc-image-slider-ngx/fc-image-slider-ngx.component';
import { SocialNetworksLinksComponent } from '../../components/shared/social-networks-links/social-networks-links.component';
import { SocialNetworksSharingComponent } from '../../components/shared/social-networks-sharing/social-networks-sharing.component';
import { GalleryAddComponent } from '../../components/shared/gallery-add/gallery-add.component';
import { MediaAddComponent } from '../../components/shared/media-add/media-add.component';
import { PreviewPublicationComponent } from '../../components/shared/preview-publication/preview-publication.component';
import { PreviewContentPanelComponent } from '../../components/shared/preview-content-panel/preview-content-panel.component';
import { PublicationAnnouncementComponent } from '../../components/shared/publication-announcement/publication-announcement.component';
import { MainSliderComponent } from '../../components/shared/main-slider/main-slider.component';
import { PersonCardComponent } from '../../components/shared/person-card/person-card.component';
import { StandingsComponent } from '../../components/shared/standings/standings.component';
import { StandingsRepositoryService } from '../../services/standings-repository.service';
import { TourneysRepositoryService } from '../../services/tourneys-repository.service';
import { TourneysSelectComponent } from '../../components/shared/tourneys-select/tourneys-select.component';
import { TourneyGamesComponent } from '../../components/shared/tourney-games/tourney-games.component';
import { TeamsSelectComponent } from '../../components/shared/teams-select/teams-select.component';
import { PlayersStatisticsComponent } from '../../components/shared/players-statistics/players-statistics.component';
import { StatisticsService } from '../../services/statistics.service';


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    TranslateModule,
    AppRoutingModule,
    ShareButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    NgxGalleryModule
  ],
  declarations: [
    FcImageSliderComponent,
    FcImageSliderNgxComponent,
    SocialNetworksLinksComponent,
    SocialNetworksSharingComponent,
    GalleryAddComponent,
    MediaAddComponent,
    PreviewPublicationComponent,
    PreviewContentPanelComponent,
    PublicationAnnouncementComponent,
    MainSliderComponent,
    PersonCardComponent,
    StandingsComponent,
    TourneysSelectComponent,
    TourneyGamesComponent,
    TeamsSelectComponent,
    PlayersStatisticsComponent
  ],
  providers: [
    TextUtilityService,
    ImageUtilityService,
    UrlUtilityService,
    StringCacheUtilityService,
    GalleriesRepositoryService,
    VideosRepositoryService,
    StandingsRepositoryService,
    TourneysRepositoryService,
    StatisticsService
  ],
  exports: [
    FcImageSliderComponent,
    FcImageSliderNgxComponent,
    SocialNetworksLinksComponent,
    SocialNetworksSharingComponent,
    GalleryAddComponent,
    MediaAddComponent,
    PreviewPublicationComponent,
    PreviewContentPanelComponent,
    PublicationAnnouncementComponent,
    MainSliderComponent,
    PersonCardComponent,
    StandingsComponent,
    TourneysSelectComponent,
    TourneyGamesComponent,
    TeamsSelectComponent,
    PlayersStatisticsComponent
  ]
})
export class SharedComponentsModule { }
