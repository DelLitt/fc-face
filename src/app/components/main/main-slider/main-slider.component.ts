import { Component, OnInit } from '@angular/core';
import { PublicationsRepositoryService } from '../../../services/publications-repository.service';
import { Publication } from '../../../model/publication';
import { LogService } from '../../../services/log.service';

const MaxLeadLength = 150;

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  private _publications: Array<Publication> = null;

  constructor(private publicationsRepository: PublicationsRepositoryService, private logger: LogService) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

  public get publications(): Array<Publication> {
    if (this._publications == null) {
      this._publications = this.publicationsRepository.getHotPublications();
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded publications. Count: ${this.publications.length}.`);
    }

    return this._publications;
  }

  private getLead(publication: Publication) {
    const lead: string = (publication.lead || '');
    return lead.length < MaxLeadLength ? lead : lead.substring(0, MaxLeadLength) + '...';
  }
}
