import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { PublicationEntity } from '../model/publications/publication-entity';
import { DataSourceService } from './data-source.service';
import { EntitiesPage } from '../model/publications/entities-page';


const MinSearchTextLength = 3;

@Injectable()
export class SearchService {

  constructor(
    private dataSource: DataSourceService,
    private logger: LogService
  ) { }

  public get minSearchTextLength(): number {
    return MinSearchTextLength;
  }

  public search(text: string, count: number, skip: number = 0): Promise<EntitiesPage> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' has started searching for: '${text}'.`);

      this.dataSource.search(text, count, skip)
        .then(result => {
          if (result) {
            const entitiesPage = new EntitiesPage();
            entitiesPage.items = this.convertResponseToEntities(result.items);
            entitiesPage.totalCount = result.totalCount;
            this.logger.logDebug(`'${(<any>this).constructor.name}' has finished searching successfully.`);
            resolve(entitiesPage);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' has no found any items for: '${text}'!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  private convertResponseToEntities(response: Array<any>): PublicationEntity[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<PublicationEntity>(); }

    const entities: PublicationEntity[] = new Array<PublicationEntity>();
    data.forEach(element => {
      const entity = new Object() as PublicationEntity;
      entity.id = element.id;
      entity.title = element.title;
      entity.img = element.img;
      entity.description = element.lead;
      entity.author = element.author;
      entity.displayDate = new Date(element.displayDate);
      entity.hasPhoto = element.galleryId > 0;
      entity.hasVideo = element.videoId > 0;
      entity.classification = element.classification;

      entities.push(entity);
    });

    return entities;
  }

}
