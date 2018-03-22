import { Component, OnInit, Input } from '@angular/core';
import { Publication } from '../../../model/publications/publication';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-fc-image-slider',
  templateUrl: './fc-image-slider.component.html',
  styleUrls: ['./fc-image-slider.component.scss']
})
export class FcImageSliderComponent implements OnInit {

  private _publications: Publication[] = new Array<Publication>();

  constructor(private logger: LogService) {
  }

  public get publications(): Array<Publication> {
    return this._publications;
  }

  @Input() public set publications(value: Array<Publication>) {
    this._publications = value || new Array<Publication>();
    this.logger.logInfo(`'${(<any>this).constructor.name}' received publications. Count: ${this._publications.length}.`);
  }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

}
