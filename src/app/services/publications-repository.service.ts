import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { Publication } from '../model/publication';
import { LogService } from './log.service';

@Injectable()
export class PublicationsRepositoryService {

  constructor(private dataSource: DataSourceService, private logger: LogService) { }

  public getPubliction(id: number): Promise<Publication> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading the publication (id:${id}).`);

      this.dataSource.getPublication(id)
        .then(result => {
          if (!result) { reject (`Publication ${id} is not found!`); }

          const publication: Publication = this.ConvertResponseToPublication(result);
          this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the publication (id:${id}) successfully.`);

          resolve(publication);
        });
    });
  }

  public getHotPublications(): Promise<Publication[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading hot publications.`);

      this.dataSource.getLatestPublications(3)
        .then(result => {
          if (!result) { reject (`No latest publications are found!`); }

          const publications: Publication[] = this.ConvertResponseToHotPublications(result);
          this.logger.logInfo(`'${(<any>this).constructor.name}' loaded publications successfully.`);

          resolve(publications);
        });
    });
  }

  private ConvertResponseToPublication(response: any): Publication {
    if (!response) { return null; }

    const publication = new Publication();
    publication.id = response.id;
    publication.header = response.header;
    publication.img = response.img;
    publication.lead = response.lead;
    publication.title = response.title;
    publication.galleryId = response.galleryId;
    publication.hasVideo = response.hasVideo;
    publication.showImageInContent = response.showImageInContent;
    publication.content = response.content;
    publication.author = response.author;
    publication.displayDate = new Date(response.displayDate);
    publication.sortDate = new Date(response.sortDate);

    return publication;
  }

  private ConvertResponseToHotPublications(response: Array<any>): Publication[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Publication>(); }

    const publications: Publication[] = new Array<Publication>();

    data.forEach(element => {
      const publication = new Publication();
      publication.id = element.id;
      publication.header = element.header;
      publication.img = element.img;
      publication.lead = element.lead;
      publication.title = element.title;
      publication.galleryId = element.galleryId;
      publication.hasVideo = element.hasVideo;

      publications.push(publication);
    });

    return publications;
  }
}
