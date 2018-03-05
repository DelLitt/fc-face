import { Component, OnInit } from '@angular/core';
import { PublicationsRepositoryService } from '../../../services/publications-repository.service';
import { LogService } from '../../../services/log.service';
import { Publication } from '../../../model/publication';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';

const DefPageSize = 2;

@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit {

  private _loaded = false;
  private pageIndex = 0;
  private pageSize: number = DefPageSize;
  private pageSizeOptions: number[] = [DefPageSize, 25, 50, 100];
  private publicationsTotalCount = 0;
  private publications: Publication[];

  constructor(
    private publicationsRepository: PublicationsRepositoryService,
    private router: Router,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.loadPublictionsTotalCount();
  }

  private paginationHandler($event) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.loadPublictions(this.pageSize, this.pageIndex * this.pageSize);
    this.logger.logInfo(`'${(<any>this).constructor.name}' has processed pagination event ${$event.pageSize}.`);
  }

  private loadPublictions(count, skip: number = 0) {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to load the publications.`);
    this._loaded = false;

    this.publicationsRepository.getPublications(count, skip)
    .then(result => {
      this.publications = result;
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the publications (count: ${this.publications.length}) successfully.`);
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }

  private loadPublictionsTotalCount() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to load the publications total count.`);

    this.publicationsRepository.getPublicationsTotalCount()
    .then(result => {
      this.publicationsTotalCount = result;
      this.loadPublictions(this.pageSize);
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the publications total count: ${this.publicationsTotalCount}.`);
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }

}
