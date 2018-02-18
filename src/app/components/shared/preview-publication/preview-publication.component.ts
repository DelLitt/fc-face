import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../../services/log.service';
import { Entity } from '../../../model/entity';

@Component({
  selector: 'app-preview-publication',
  templateUrl: './preview-publication.component.html',
  styleUrls: ['./preview-publication.component.scss']
})
export class PreviewPublicationComponent implements OnInit {

  @Input() public item: Entity;
  @Input() public routePart: string;

  constructor(
    private logger: LogService
  ) { }

  ngOnInit() {
  }

}
