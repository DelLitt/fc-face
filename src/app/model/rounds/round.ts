import { SharedEntity } from '../shared-entity';

export class Round implements SharedEntity {
    public id: number;
    public href: string;
    public name: string;
    public i18nKey: string;
    public img: string;
}
