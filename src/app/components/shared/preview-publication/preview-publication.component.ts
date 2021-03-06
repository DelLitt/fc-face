import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../../services/log.service';
import { PublicationEntity } from '../../../model/publications/publication-entity';
import { TextUtilityService } from '../../../services/utilities/text-utility.service';
import { ImageUtilityService } from '../../../services/utilities/image-utility.service';

@Component({
  selector: 'app-preview-publication',
  templateUrl: './preview-publication.component.html',
  styleUrls: ['./preview-publication.component.scss']
})
export class PreviewPublicationComponent implements OnInit {

  @Input() public item: PublicationEntity;
  @Input() public routePart: string;

  constructor(
    private imageUtility: ImageUtilityService,
    private textUtility: TextUtilityService,
    private logger: LogService
  ) { }

  ngOnInit() {
  }

  private get title(): string {
    return this.item
      ? this.textUtility.cropWithEllipsis(this.item.title, 60)
      : '';
  }

  private get description(): string {
    return this.item
      ? this.textUtility.cropWithEllipsis(this.item.description, 380)
      : '';
  }

  private getImage(src: string, width: number, height: number): string {
    return this.imageUtility.addFileVariantSize(src, width, height);
  }

}
