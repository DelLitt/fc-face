import { GalleryItem } from './galleryItem';

export class Gallery {
    public id: number;
    public title: string;
    public header: string;
    public img: string;
    public lead: string;
    public author: string;
    public displayDate: Date;
    public sortDate: Date;
    public items: Array<Gallery>;
}
