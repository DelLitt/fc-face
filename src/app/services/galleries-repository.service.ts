import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { Gallery } from '../model/gallery/gallery';
import { GalleryItem } from '../model/gallery/gallery-item';

@Injectable()
export class GalleriesRepositoryService {

  constructor(private dataSource: DataSourceService, private logger: LogService) { }

  public getGallery(id: number): Promise<Gallery> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading the gallery (id:${id}).`);

      this.dataSource.getEntity(id, 'galleries')
        .then(result => {
          if (result) {
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the gallery (id:${id}) successfully.`);
            const gallery: Gallery = this.convertResponseToGallery(result);
            resolve(gallery);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' not found the gallery (id:${id})!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  public getGalleries(count: number, skip: number = 0): Promise<Gallery[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading galleries.`);

      this.dataSource.getEntities(count, skip, 'galleries')
        .then(result => {
          if (result) {
            const galleries: Gallery[] = this.convertResponseToGalleries(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded galleries successfully.`);
            resolve(galleries);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load galleries!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  private convertResponseToGalleries(response: any): Gallery[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Gallery>(); }

    const galleries: Gallery[] = new Array<Gallery>();
    data.forEach(element => {
      const gallery = new Gallery();
      gallery.displayDate = new Date(element.displayDate);
      gallery.id = element.id;
      gallery.img = element.img;
      gallery.description = element.lead;
      gallery.sortDate = new Date(element.sortDate);
      gallery.title = element.title;

      galleries.push(gallery);
    });

    return galleries;
  }

  private convertResponseToGallery(response: any): Gallery {
    if (!response) { return null; }

    const gallery = new Gallery();
    gallery.author = response.author;
    gallery.displayDate = new Date(response.displayDate);
    gallery.header = response.header;
    gallery.id = response.id;
    gallery.img = response.img;
    gallery.items = this.convertResponseToGalleryItems(response.items);
    gallery.description = response.lead;
    gallery.sortDate = new Date(response.sortDate);
    gallery.title = response.title;

    return gallery;
  }

  private convertResponseToGalleryItems(response: any[]): GalleryItem[] {
    if (!response) { return new Array<GalleryItem>(); }

    const galleryItems: GalleryItem[] = new Array<GalleryItem>();
    response.forEach(element => {
      const galleryItem = this.convertResponseToGalleryItem(element);
      galleryItems.push(galleryItem);
    });

    return galleryItems;
  }

  private convertResponseToGalleryItem(response: any): GalleryItem {
    if (!response) { return null; }

    const galleryItem = new GalleryItem();
    galleryItem.imgSrc = response.imgSrc;
    galleryItem.title = response.title;

    return galleryItem;
  }
}
