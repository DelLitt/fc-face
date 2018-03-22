import { SharedEntity } from './shared-entity';


export class Team implements SharedEntity {
    // SharedEntity
    public id: number;
    public href: string;
    public name: string;
    public i18nKey: string;
    public img: string;

    // Unique
    public coachId: number;
}
