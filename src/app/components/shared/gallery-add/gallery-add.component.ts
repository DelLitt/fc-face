import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrls: ['./gallery-add.component.scss']
})
export class GalleryAddComponent implements OnInit {
  private galleryOptions: NgxGalleryOptions[];
  private galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '/assets/img/_tmp/img-slide-4.png',
        medium: '/assets/img/_tmp/img-slide-4.png',
        big: '/assets/img/_tmp/img-slide-4.png'
      },
      {
        small: '/assets/img/_tmp/img-slide-3.png',
        medium: '/assets/img/_tmp/img-slide-3.png',
        big: '/assets/img/_tmp/img-slide-3.png'
      },
      {
        small: '/assets/img/_tmp/img-slide-2.png',
        medium: '/assets/img/_tmp/img-slide-2.png',
        big: '/assets/img/_tmp/img-slide-2.png'
      },
      {
        small: '/assets/img/_tmp/img-slide-1.png',
        medium: '/assets/img/_tmp/img-slide-1.png',
        big: '/assets/img/_tmp/img-slide-1.png'
      }
    ];
  }

}
