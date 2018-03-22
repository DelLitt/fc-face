import { FcLabel } from './app/fc-label';
import { Team } from './team';
import { SharedEntity } from './shared-entity';

export class Person implements SharedEntity {
    // SharedEntity
    public id: number;
    public href: string;
    public name: string;
    public i18nKey: string;
    public img: string;

    // Unique
    public nameFirst: string;
    public nameLast: string;
    public role: FcLabel;
    public teams: Team[];
}
