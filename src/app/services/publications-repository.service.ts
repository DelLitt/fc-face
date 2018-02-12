import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { Publication } from '../model/publication';

@Injectable()
export class PublicationsRepositoryService {

  constructor(private dataSource: DataSourceService) { }

  public getPubliction(id: number) {
    const element: any = this.dataSource.getPublication(id);
    if (!element) { return null; }

    const publication = new Publication();
    publication.id = element.id;
    publication.header = element.header;
    publication.img = element.img;
    publication.lead = element.lead;
    publication.title = element.title;
    publication.hasGallery = element.hasGallery;
    publication.hasVideo = element.hasVideo;
    publication.showImageInContent = element.showImageInContent;
    publication.content = element.content;
    publication.author = element.author;
    publication.displayDate = new Date(element.displayDate);
    publication.sortDate = new Date(element.sortDate);

    return publication;
  }

  public getHotPublications(): Array<Publication> {
    const data: Array<Publication> = this.dataSource.getLatestPublications(3) || [];
    if (data.length === 0) { return data; }

    const publications: Array<Publication> = new Array<Publication>();

    data.forEach(element => {
      const publication = new Publication();
      publication.id = element.id;
      publication.header = element.header;
      publication.img = element.img;
      publication.lead = element.lead;
      publication.title = element.title;
      publication.hasGallery = element.hasGallery;
      publication.hasVideo = element.hasVideo;

      publications.push(publication);
    });

    return publications;
  }
}
