import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryOrder } from 'ngx-gallery';
import { GalleryItem } from '../../../model/gallery/gallery-item';
import { Output } from '@angular/core/src/metadata/directives';
import { ImageUtilityService } from '../../../services/utilities/image-utility.service';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrls: ['./gallery-add.component.scss']
})
export class GalleryAddComponent implements OnInit {
  private galleryOptions: NgxGalleryOptions[];
  private galleryImages: NgxGalleryImage[];

  @Input() widthFull = 900;
  @Input() heightFull = 650;
  @Input() widthMedium = 610;
  @Input() heightMedium = 440;
  @Input() widthSmall = 380;
  @Input() heightSmall = 275;

  private _items: GalleryItem[];

  constructor(
    private imageUtility: ImageUtilityService,
    private logger: LogService) { }

  public get items(): GalleryItem[] {
    return this._items;
  }

  @Input() public set items(value: GalleryItem[]) {
    this._items = value || new Array<GalleryItem>();
    this.initItems();
  }

  private initItems() {
    const images: NgxGalleryImage[] = new Array<NgxGalleryImage>();

    this.items.forEach(element => {
      const src = element.imgSrc;
      const galleryImage = new NgxGalleryImage({
        small: this.imageUtility.addFileVariantSize(src, this.widthSmall, this.heightSmall),
        medium:  this.imageUtility.addFileVariantSize(src, this.widthMedium, this.heightMedium),
        big: this.imageUtility.addFileVariantSize(src, this.widthFull, this.heightFull)
      });

      images.push(galleryImage);
    });

    this.galleryImages = images;
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: this.widthFull + 'px',
        height: this.heightFull + 'px',
        thumbnailsColumns: 8,
        thumbnailsRows : 1,
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnailsOrder: NgxGalleryOrder.Column,
        previewCloseOnClick: true,
        previewCloseOnEsc: true
      },
      // max-width 992
      {
        breakpoint: 992,
        width: this.widthMedium + 'px',
        height: this.heightMedium + 'px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 768
      {
        breakpoint: 768,
        width: this.widthSmall + 'px',
        height: this.heightSmall + 'px',
        preview: false
      }
    ];
  }

}
