import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { Publication } from '../model/publication';

@Injectable()
export class PublicationsRepositoryService {

  constructor(private dataSource: DataSourceService) { }

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

      publications.push(publication);
    });

    return publications;
  }
}
