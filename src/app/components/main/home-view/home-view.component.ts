import { Component, OnInit } from '@angular/core';
import { PublicationsRepositoryService } from '../../../services/publications-repository.service';
import { VideosRepositoryService } from '../../../services/videos-repository.service';
import { GalleriesRepositoryService } from '../../../services/galleries-repository.service';
import { Publication } from '../../../model/publication';
import { Video } from '../../../model/video';
import { Gallery } from '../../../model/gallery/gallery';
import { LogService } from '../../../services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  private _loadedPublications = false;
  private _loadedVideos = false;
  private _loadedGalleries = false;

  private actualPublications: Publication[] = new Array<Publication>();
  private publications: Publication[] = new Array<Publication>();
  private videos: Video[] = new Array<Video>();
  private galleries: Gallery[] = new Array<Gallery>();

  constructor(
    private publicationsRepository: PublicationsRepositoryService,
    private videosRepository: VideosRepositoryService,
    private galleriesRepository: GalleriesRepositoryService,
    private logger: LogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadPublications();
    this.loadVideos();
    this.loadGalleries();
  }

  private loadPublications() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to get publications.`);

    this.publicationsRepository.getPublications(7)
      .then(
        result => {
          this.publications = result;
          this.actualPublications = this.publications.slice(0, 3);
          this._loadedPublications = true;
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

    this.videosRepository.getVideos(4)
      .then(
        result => {
          this.videos = result;
          this._loadedVideos = true;
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

    this.galleriesRepository.getGalleries(4)
      .then(
        result => {
          this.galleries = result;
          this._loadedGalleries = true;
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
    this._loadedPublications = true;
    this._loadedVideos = true;
    this._loadedGalleries = true;
    this.logger.logInfo(`'${(<any>this).constructor.name}' failed: ${msg}.`);
  }

}
