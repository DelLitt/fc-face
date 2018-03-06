import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Entity } from '../model/entity';
import { DataSourceService } from './data-source.service';


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

  public search(text: string): Promise<Entity[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' has started searching for: '${text}'.`);

      this.dataSource.search(text)
        .then(result => {
          if (result) {
            const entities: Entity[] = this.convertResponseToEntities(result);
            this.logger.logDebug(`'${(<any>this).constructor.name}' has finished searching successfully.`);
            resolve(entities);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' has no found any items for: '${text}'!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  private convertResponseToEntities(response: Array<any>): Entity[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Entity>(); }

    const entities: Entity[] = new Array<Entity>();
    data.forEach(element => {
      const entity = new Object() as Entity;
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
