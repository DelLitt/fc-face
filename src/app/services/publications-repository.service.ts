import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { Publication } from '../model/publication';

@Injectable()
export class PublicationsRepositoryService {

  constructor(private dataSource: DataSourceService) { }

  public getHotPublications(): Array<Publication> {
    return this.dataSource.getLatestPublications(3);
  }
}
