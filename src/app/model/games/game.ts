import { Team } from '../team';
import { Round } from '../rounds/round';

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
    public played: boolean;
    public round: Round;
}
