import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { GalleriesRepositoryService } from '../../../services/galleries-repository.service';
import { Gallery } from '../../../model/publications/gallery';
import { VideosRepositoryService } from '../../../services/videos-repository.service';
import { Video } from '../../../model/publications/video';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-media-add',
  templateUrl: './media-add.component.html',
  styleUrls: ['./media-add.component.scss']
})
export class MediaAddComponent implements OnInit {

  private _loadedGallery = false;
  private _loadedVideo = false;
  private _galleryId: number;
  private _videoId: number;
  private gallery: Gallery = new Gallery();
  private video: Video = new Video();

  constructor(
    private galleriesRepository: GalleriesRepositoryService,
    private videosRepository: VideosRepositoryService,
    private sanitizer: DomSanitizer,
    private logger: LogService) { }

  @Input() public set galleryId(value: number) {
    this._galleryId = value || 0;
    this.logger.logInfo(`'${(<any>this).constructor.name}' recieved the gallery ID: ${this._galleryId}.`);
  }

  @Input() public set videoId(value: number) {
    this._videoId = value || 0;
    this.logger.logInfo(`'${(<any>this).constructor.name}' recieved the video ID: ${this._videoId}.`);
  }

  private get videoPlayerCode(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.video.htmlCode);
  }

  private loadGallery() {
    if (!this._galleryId) { return; }
    this.logger.logDebug(`'${(<any>this).constructor.name}' started loading the gallery (id:${this._galleryId}).`);

    this.galleriesRepository.getGallery(this._galleryId)
    .then(result => {
      this.gallery = result;
      this._loadedGallery = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the gallery (id:${this._galleryId}) successfully.`);
    })
    .catch(reason => {
      this._loadedGallery = true;
      this._galleryId = 0;
    });
  }

  private loadVideo() {
    if (!this._videoId) { return; }
    this.logger.logDebug(`'${(<any>this).constructor.name}' started loading the video (id:${this._videoId}).`);

    this.videosRepository.getVideo(this._videoId)
    .then(result => {
      this.video = result;
      this._loadedVideo = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the video (id:${this._videoId}) successfully.`);
    })
    .catch(reason => {
      this._loadedVideo = true;
      this._videoId = 0;
    });
  }

  ngOnInit() {
  }

}
