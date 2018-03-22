import { GalleryItem } from './gallery-item';
import { PublicationEntity } from './publication-entity';

export class Gallery implements PublicationEntity {
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
    public classification: string;
}
