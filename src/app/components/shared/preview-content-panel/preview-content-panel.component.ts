import { Component, OnInit, Input } from '@angular/core';
import { PublicationEntity } from '../../../model/publication-entity';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-preview-content-panel',
  templateUrl: './preview-content-panel.component.html',
  styleUrls: ['./preview-content-panel.component.scss']
})
export class PreviewContentPanelComponent implements OnInit {

  private _loaded = false;
  private _items: PublicationEntity[] = new Array<PublicationEntity>();

  @Input() public routePart: string;

  constructor(
    private logger: LogService
  ) { }

  ngOnInit() {
  }

  public get items(): PublicationEntity[] {
    return this._items;
  }

  @Input() public set items(value: PublicationEntity[]) {
    this._loaded = value ? true : false;
    this._items = value || new Array<PublicationEntity>();
    this.logger.logInfo(`'${(<any>this).constructor.name}' received items. Count: ${this._items.length}.`);
  }

}
