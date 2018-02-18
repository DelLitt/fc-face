import { Entity } from './entity';

export class Video implements Entity {
    public id: number;
    public title: string;
    public header: string;
    public img: string;
    public description: string;
    public author: string;
    public displayDate: Date;
    public sortDate: Date;
    public htmlCode: string;
}
