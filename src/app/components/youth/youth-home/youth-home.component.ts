import { Component, OnInit } from '@angular/core';
import { PublicationsRepositoryService } from '../../../services/publications-repository.service';
import { LogService } from '../../../services/log.service';
import { Publication } from '../../../model/publication';

@Component({
  selector: 'app-youth-home',
  templateUrl: './youth-home.component.html',
  styleUrls: ['./youth-home.component.scss']
})
export class YouthHomeComponent implements OnInit {

  private _actualPublicationsLoaded = false;
  private actualPublications: Publication[] = null;
  private publications: Publication[] = null;

  constructor(
    private publicationsRepository: PublicationsRepositoryService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadPublications();
  }

  private loadPublications() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to get publications.`);

    this.publicationsRepository.getYouthPublications(7)
      .then(
        result => {
          this.publications = result;
          this.actualPublications = this.publications.slice(0, 3);
          this._actualPublicationsLoaded = true;
          this.logger.logInfo(`'${(<any>this).constructor.name}' loaded publications. Count: ${this.publications.length}.`);
        },
        err => {
          this.rollback(err);
        }
      )
      .catch(reason => {
        this.rollback(reason);
      });
  }

  private rollback(msg: string) {
    this._actualPublicationsLoaded = true;
    this.actualPublications = new Array<Publication>();
    this.publications = new Array<Publication>();

    this.logger.logInfo(`'${(<any>this).constructor.name}' failed: ${msg}.`);
  }

}
