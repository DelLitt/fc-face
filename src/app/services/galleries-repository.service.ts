import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { Gallery } from '../model/gallery/gallery';
import { GalleryItem } from '../model/gallery/galleryItem';

@Injectable()
export class GalleriesRepositoryService {

  constructor(private dataSource: DataSourceService, private logger: LogService) { }

  public getGallery(id: number): Promise<Gallery> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading the gallery (id:${id}).`);

      this.dataSource.getGallery(id)
        .then(result => {
          if (!result) { reject (`Gallery ${id} is not found!`); }

          const gallery: Gallery = this.ConvertResponseToGallery(result);
          this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the gallery (id:${id}) successfully.`);

          resolve(gallery);
        });
    });
  }

  private ConvertResponseToGallery(response: any): Gallery {
    if (!response) { return null; }

    const gallery = new Gallery();
    gallery.author = response.author;
    gallery.displayDate = new Date(response.displayDate);
    gallery.header = response.header;
    gallery.id = response.id;
    gallery.img = response.img;
    gallery.items = this.ConvertResponseToGalleryItems(response.items);
    gallery.lead = response.lead;
    gallery.sortDate = new Date(response.sortDate);
    gallery.title = response.title;

    return gallery;
  }

  private ConvertResponseToGalleryItems(response: any[]): GalleryItem[] {
    if (!response) { return new Array<GalleryItem>(); }

    const galleryItems: GalleryItem[] = new Array<GalleryItem>();
    response.forEach(element => {
      const galleryItem = this.ConvertResponseToGalleryItem(element);
      galleryItems.push(galleryItem);
    });

    return galleryItems;
  }

  private ConvertResponseToGalleryItem(response: any): GalleryItem {
    if (!response) { return null; }

    const galleryItem = new GalleryItem();
    galleryItem.imgSrc = response.imgSrc;
    galleryItem.title = response.title;

    return galleryItem;
  }
}
