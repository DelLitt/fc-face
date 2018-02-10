import { Component, OnInit, Input } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Publication } from '../../../model/publication';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-fc-image-slider-ngx',
  templateUrl: './fc-image-slider-ngx.component.html',
  styleUrls: ['./fc-image-slider-ngx.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: true } }
  ]
})
export class FcImageSliderNgxComponent implements OnInit {

  _publications: Array<Publication> = new Array<Publication>();

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
