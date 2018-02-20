import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../../services/log.service';
import { Entity } from '../../../model/entity';
import { TextUtilityService } from '../../../services/utilities/text-utility.service';

@Component({
  selector: 'app-preview-publication',
  templateUrl: './preview-publication.component.html',
  styleUrls: ['./preview-publication.component.scss']
})
export class PreviewPublicationComponent implements OnInit {

  @Input() public item: Entity;
  @Input() public routePart: string;

  constructor(
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
      ? this.textUtility.cropWithEllipsis(this.item.description, 280)
      : '';
  }

}
