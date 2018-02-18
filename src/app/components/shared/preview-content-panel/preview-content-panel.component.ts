import { Component, OnInit, Input } from '@angular/core';
import { Entity } from '../../../model/entity';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-preview-content-panel',
  templateUrl: './preview-content-panel.component.html',
  styleUrls: ['./preview-content-panel.component.scss']
})
export class PreviewContentPanelComponent implements OnInit {

  private _loaded = false;
  private _items: Entity[] = new Array<Entity>();

  @Input() public routePart: string;

  constructor(
    private logger: LogService
  ) { }

  ngOnInit() {
  }

  public get items(): Entity[] {
    return this._items;
  }

  @Input() public set items(value: Entity[]) {
    this._loaded = value ? true : false;
    this._items = value || new Array<Entity>();
    this.logger.logInfo(`'${(<any>this).constructor.name}' received items. Count: ${this._items.length}.`);
  }

}
