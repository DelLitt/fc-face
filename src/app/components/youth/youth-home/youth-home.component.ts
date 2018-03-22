import { Component, OnInit } from '@angular/core';
import { PublicationsRepositoryService } from '../../../services/publications-repository.service';
import { LogService } from '../../../services/log.service';
import { Publication } from '../../../model/publications/publication';
import { VideosRepositoryService } from '../../../services/videos-repository.service';
import { GalleriesRepositoryService } from '../../../services/galleries-repository.service';
import { Video } from '../../../model/publications/video';
import { Gallery } from '../../../model/publications/gallery';

@Component({
  selector: 'app-youth-home',
  templateUrl: './youth-home.component.html',
  styleUrls: ['./youth-home.component.scss']
})
export class YouthHomeComponent implements OnInit {

  private _actualPublicationsLoaded = false;
  private actualPublications: Publication[] = null;
  private publications: Publication[] = null;
  private videos: Video[] = null;
  private galleries: Gallery[] = null;

  constructor(
    private publicationsRepository: PublicationsRepositoryService,
    private videosRepository: VideosRepositoryService,
    private galleriesRepository: GalleriesRepositoryService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadPublications();
    this.loadVideos();
    this.loadGalleries();
  }

  private loadPublications() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to get publications.`);

    this.publicationsRepository.getYouthPublications(6)
      .then(
        result => {
          this.publications = result;
          this.actualPublications = this.publications.slice(0, 3);
          this._actualPublicationsLoaded = true;
          this.logger.logInfo(`'${(<any>this).constructor.name}' loaded publications. Count: ${this.publications.length}.`);
        },
        err => {
          this.rollback(err);
        }
      )
      .catch(reason => {
        this.rollback(reason);
      });
  }

  private loadVideos() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to get videos.`);

    this.videosRepository.getYouthVideos(3)
      .then(
        result => {
          this.videos = result;
          this.logger.logInfo(`'${(<any>this).constructor.name}' loaded videos. Count: ${this.videos.length}.`);
        },
        err => {
          this.rollback(err);
        }
      )
      .catch(reason => {
        this.rollback(reason);
      });
  }

  private loadGalleries() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to get galleries.`);

    this.galleriesRepository.getYouthGalleries(3)
      .then(
        result => {
          this.galleries = result;
          this.logger.logInfo(`'${(<any>this).constructor.name}' loaded galleries. Count: ${this.galleries.length}.`);
        },
        err => {
          this.rollback(err);
        }
      )
      .catch(reason => {
        this.rollback(reason);
      });
  }

  private rollback(msg: string) {
    this._actualPublicationsLoaded = true;
    this.actualPublications = new Array<Publication>();
    this.publications = new Array<Publication>();

    this.logger.logInfo(`'${(<any>this).constructor.name}' failed: ${msg}.`);
  }

}
