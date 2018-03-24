import { TeamStaticPerson } from './team-static-person';

export class TeamStaticModel {
    public img: string;
    public description: string;
    public players: Array<TeamStaticPerson>;
    public coaches: Array<TeamStaticPerson>;
}

