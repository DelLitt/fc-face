import { FcLabel } from './app/fc-label';
import { Team } from './teams/team';
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
    public birthDate: Date;
    public age: number;
    public personNumber: number;
    public personRoleId: number;
    // TODO: Change FcLabel to class PersonRole
    public role: FcLabel;
    public teams: Team[];
}
