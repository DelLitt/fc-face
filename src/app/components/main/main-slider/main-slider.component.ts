import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PublicationsRepositoryService } from '../../../services/publications-repository.service';
import { Publication } from '../../../model/publication';
import { LogService } from '../../../services/log.service';

const MaxLeadLength = 100;

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  private _publications: Array<Publication> = null;
  public index = 0;

  constructor(
    private publicationsRepository: PublicationsRepositoryService,
    private logger: LogService,
    private router: Router) { }

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

  private onActiveSlideChange() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' changed slide to ${this.index}.`);
  }

  private selectPreview(value) {
    this.logger.logInfo(`'${(<any>this).constructor.name}'. Click on preview number ${value.index}.`);

    if (this.index === value.index) {
      this.logger.logInfo(`'${(<any>this).constructor.name}'. Navigate to preview ${value.id}.`);
      this.router.navigate(['/publication', value.id]);
      return;
    }

    this.index = value.index;
  }
}
