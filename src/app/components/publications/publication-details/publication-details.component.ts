import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { PublicationsRepositoryService } from '../../../services/publications-repository.service';
import { Publication } from '../../../model/publication';
import { debug } from 'util';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.scss']
})
export class PublicationDetailsComponent implements OnInit {

  private publication: Publication = null;
  @Input() public id = 0;

  constructor(
    private publicationsRepository: PublicationsRepositoryService,
    private logger: LogService) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadPubliction();
  }

  private loadPubliction() {
    this.publication = this.publicationsRepository.getPubliction(this.id);
  }

}
