import { SharedEntity } from './shared-entity';

export class Tourney implements SharedEntity {
    // SharedEntity
    public id: number;
    public href: string;
    public name: string;
    public i18nKey: string;
    public img: string;

    // Unique
    public tourneyTypeId: number;
    public cityId: number;
    public dateStart: Date;
    public dateEnd: Date;
}
