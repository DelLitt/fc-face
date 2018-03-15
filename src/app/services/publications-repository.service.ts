import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { Publication } from '../model/publication';
import { LogService } from './log.service';
import { PublicationVisibility } from '../model/publication-visibility';

@Injectable()
export class PublicationsRepositoryService {

  constructor(private dataSource: DataSourceService, private logger: LogService) { }

  public getPubliction(id: number): Promise<Publication> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading the publication (id:${id}).`);

      this.dataSource.getEntity(id, 'publications')
        .then(result => {
          if (result) {
            const publication: Publication = this.convertResponseToPublication(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the publication (id:${id}) successfully.`);
            resolve(publication);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' not found the publication (id:${id})!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  public getAllPublications(count: number, skip: number = 0): Promise<Publication[]> {
    const visibility = [
      PublicationVisibility.main,
      PublicationVisibility.news,
      PublicationVisibility.reserve,
      PublicationVisibility.youth
    ];

    return this.getPublications(count, skip, visibility);
  }

  public getYouthPublications(count: number, skip: number = 0): Promise<Publication[]> {
    const visibility = [
      PublicationVisibility.youth
    ];

    return this.getPublications(count, skip, visibility);
  }

  private getPublications(
    count: number,
    skip: number,
    visibility: PublicationVisibility[]
  ): Promise<Publication[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading publications.`);

      this.dataSource.getEntities(count, skip, 'publications', visibility)
        .then(result => {
          if (result) {
            const publications: Publication[] = this.convertResponseToPublications(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded publications successfully.`);
            resolve(publications);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load publications!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  public getPublicationsTotalCount(): Promise<number> {
    this.logger.logDebug(`'${(<any>this).constructor.name}' has started calculation total number of publications.`);

    return new Promise((resolve, reject) => {
      const visibility = [
        PublicationVisibility.main,
        PublicationVisibility.news,
        PublicationVisibility.reserve,
        PublicationVisibility.youth
      ];

      this.dataSource.getEntitiesCount('publications', visibility)
      .then(result => {
        if (result) {
          this.logger.logInfo(`'${(<any>this).constructor.name}' loaded publications total count (${result}) successfully.`);
          resolve(result);
        } else {
          const errorMsg = `'${(<any>this).constructor.name}' was unable to load publications total count!`;
          this.logger.logError(errorMsg);
          reject(new Error(errorMsg));
        }
      });
    });
  }

  private convertResponseToPublications(response: Array<any>): Publication[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Publication>(); }

    const publications: Publication[] = new Array<Publication>();
    data.forEach(element => {
      const publication = new Publication();
      publication.id = element.id;
      publication.header = element.header;
      publication.img = element.img;
      publication.description = element.lead;
      publication.title = element.title;
      publication.galleryId = element.galleryId;
      publication.videoId = element.videoId;
      publication.author = element.author;
      publication.displayDate = new Date(element.displayDate);
      publication.hasPhoto = element.galleryId > 0;
      publication.hasVideo = element.videoId > 0;

      publications.push(publication);
    });

    return publications;
  }

  private convertResponseToPublication(response: any): Publication {
    if (!response) { return null; }

    const publication = new Publication();
    publication.id = response.id;
    publication.header = response.header;
    publication.img = response.img;
    publication.description = response.lead;
    publication.title = response.title;
    publication.galleryId = response.galleryId;
    publication.videoId = response.videoId;
    publication.showImageInContent = response.showImageInContent;
    publication.content = response.content;
    publication.author = response.author;
    publication.displayDate = new Date(response.displayDate);
    publication.sortDate = new Date(response.sortDate);

    return publication;
  }
}
