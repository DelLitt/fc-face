import { Component, OnInit } from '@angular/core';
import { PublicationsRepositoryService } from '../../../services/publications-repository.service';
import { LogService } from '../../../services/log.service';
import { Publication } from '../../../model/publication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit {

  private _loaded = false;
  private publications: Publication[];

  constructor(
    private publicationsRepository: PublicationsRepositoryService,
    private router: Router,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.loadPublictions();
  }

  private loadPublictions() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to load the publications.`);

    this.publicationsRepository.getPublications(20)
    .then(result => {
      this.publications = result;
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the publications (count: ${this.publications.length}) successfully.`);
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }

}
