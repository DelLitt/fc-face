import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { PublicationsRepositoryService } from '../../../services/publications-repository.service';
import { Publication } from '../../../model/publication';
import { GalleriesRepositoryService } from '../../../services/galleries-repository.service';
import { Gallery } from '../../../model/gallery/gallery';
import { GalleryItem } from '../../../model/gallery/galleryItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.scss']
})
export class PublicationDetailsComponent implements OnInit {

  private _loaded = false;
  private publication: Publication = new Publication();

  @Input() public id = 0;

  constructor(
    private publicationsRepository: PublicationsRepositoryService,
    private galleriesRepository: GalleriesRepositoryService,
    private router: Router,
    private logger: LogService) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadPubliction();
  }

  private loadPubliction() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to load the publication (id:${this.id}).`);

    this.publicationsRepository.getPubliction(this.id)
    .then(result => {
      this.publication = result;
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the publication (id:${this.id}) successfully.`);
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }
}
