import { SharedEntity } from '../shared-entity';
import { Tourney } from '../tourney';

export class Round implements SharedEntity {
    // SharedEntity
    public id: number;
    public href: string;
    public name: string;
    public i18nKey: string;
    public img: string;

    // Unique
    public tourney: Tourney;
}
