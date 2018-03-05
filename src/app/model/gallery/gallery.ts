import { GalleryItem } from './gallery-item';
import { Entity } from '../entity';

export class Gallery implements Entity {
    public id: number;
    public title: string;
    public header: string;
    public img: string;
    public description: string;
    public author: string;
    public displayDate: Date;
    public sortDate: Date;
    public items: GalleryItem[];
    public hasVideo: boolean;
    public hasPhoto: boolean;
}
