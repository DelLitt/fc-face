import { Component, OnInit, Input } from '@angular/core';
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
  private _loaded = false;
  private _publications: Publication[] = new Array<Publication>();
  public index = 0;

  constructor(
    private publicationsRepository: PublicationsRepositoryService,
    private logger: LogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

  public get publications(): Array<Publication> {
    return this._publications;
  }

  @Input() public set publications(value: Array<Publication>) {
    this._loaded = value ? true : false;
    this._publications = value || new Array<Publication>();
    this.index = 0;
    this.logger.logInfo(`'${(<any>this).constructor.name}' received publications. Count: ${this._publications.length}.`);
  }

  private getLead(publication: Publication) {
    const lead: string = (publication.description || '');
    return lead.length < MaxLeadLength ? lead : lead.substring(0, MaxLeadLength) + '...';
  }

  private onActiveSlideChange() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' changed slide to ${this.index}.`);
  }

  private selectPreview(value) {
    this.logger.logInfo(`'${(<any>this).constructor.name}'. Click on preview number ${value.index}.`);

    if (this.index === value.index) {
      this.logger.logInfo(`'${(<any>this).constructor.name}'. Navigate to preview ${value.id}.`);
      this.router.navigate(['/publications', value.id]);
      return;
    }

    this.index = value.index;
  }
}
