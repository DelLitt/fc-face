import { Team } from '../team';

export class Game {
    public id: number;
    public date: Date;
    public home: Team;
    public away: Team;
    public scoreHome: number;
    public scoreAway: number;
    public scoreAddHome: number;
    public scoreAddAway: number;
    public penaltiesHome: number;
    public penaltiesAway: number;
}
