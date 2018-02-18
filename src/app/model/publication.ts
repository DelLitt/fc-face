import { Entity } from './entity';

export class Publication implements Entity {
    public id: number;
    public title: string;
    public header: string;
    public img: string;
    public description: string;
    public content: string;
    public showImageInContent: boolean;
    public author: string;
    public displayDate: Date;
    public sortDate: Date;
    public galleryId: number;
    public videoId: number;
}
