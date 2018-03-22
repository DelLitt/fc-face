import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Publication } from '../../../model/publications/publication';
import { LogService } from '../../../services/log.service';
import { Router } from '@angular/router';
import { ImageUtilityService } from '../../../services/utilities/image-utility.service';

@Component({
  selector: 'app-fc-image-slider-ngx',
  templateUrl: './fc-image-slider-ngx.component.html',
  styleUrls: ['./fc-image-slider-ngx.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: false, showIndicators: true } }
  ]
})
export class FcImageSliderNgxComponent implements OnInit {

  private _activeSlide = 0;
  private _publications: Array<Publication> = new Array<Publication>();

  @Output() public activeSlideChange = new EventEmitter();

  constructor(
    private imageUtility: ImageUtilityService,
    private logger: LogService,
    private router: Router) {
  }

  @Input() public get activeSlide() {
    return this._activeSlide;
  }

  public set activeSlide(value) {
    this._activeSlide = value;
    this.logger.logDebug(`'${(<any>this).constructor.name}' changed slide to ${this._activeSlide}.`);
    this.activeSlideChange.emit(this._activeSlide);
  }

  private onActiveSlideChange(index: number) {
    this.activeSlide = this._activeSlide;
  }

  public get publications(): Array<Publication> {
    return this._publications;
  }

  @Input() public set publications(value: Array<Publication>) {
    this._publications = value || new Array<Publication>();
    this.logger.logInfo(`'${(<any>this).constructor.name}' received publications. Count: ${this._publications.length}.`);
  }

  private getImage(src: string, width: number, height: number): string {
    return this.imageUtility.getImageAnyway(src, width, height);
  }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

}
