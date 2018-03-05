import { Component, OnInit, Input } from '@angular/core';
import { Entity } from '../../../model/entity';
import { LogService } from '../../../services/log.service';
import { TextUtilityService } from '../../../services/utilities/text-utility.service';
import { ImageUtilityService } from '../../../services/utilities/image-utility.service';

@Component({
  selector: 'app-publication-announcement',
  templateUrl: './publication-announcement.component.html',
  styleUrls: ['./publication-announcement.component.scss']
})
export class PublicationAnnouncementComponent implements OnInit {

  @Input() public item: Entity;
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
      ? this.textUtility.cropWithEllipsis(this.item.title, 250)
      : '';
  }

  private get description(): string {
    return this.item
      ? this.textUtility.cropWithEllipsis(this.item.description, 500)
      : '';
  }

  private getImage(width: number, height: number): string {
    return this.imageUtility.getImageAnyway(this.item.img, width, height);
  }

}
