import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { GalleriesRepositoryService } from '../../../services/galleries-repository.service';
import { Gallery } from '../../../model/gallery/gallery';

@Component({
  selector: 'app-media-add',
  templateUrl: './media-add.component.html',
  styleUrls: ['./media-add.component.scss']
})
export class MediaAddComponent implements OnInit {

  private _loadedGallery = false;
  private _galleryId: number;
  private gallery: Gallery = new Gallery();

  constructor(
    private galleriesRepository: GalleriesRepositoryService,
    private logger: LogService) { }

  public get galleryId(): number {
    return this._galleryId;
  }

  @Input() public set galleryId(value: number) {
    this._galleryId = value || 0;
    this.logger.logInfo(`'${(<any>this).constructor.name}' recieved the gallery ID: ${this._galleryId}.`);
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
      this.galleryId = 0;
    });
  }

  ngOnInit() {
  }

}
