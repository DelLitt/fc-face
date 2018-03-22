import { FcLabel } from './app/fc-label';
import { Team } from './team';

export class Person {
    public id: number;
    public nameFirst: string;
    public nameLast: string;
    public img: string;
    public role: FcLabel;
    public teams: Team[];
}
