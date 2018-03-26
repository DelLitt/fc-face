import { Person } from './person';

export class PlayerStatistics {
    public person: Person;
    public tourneyId: number;
    public teamId: number;
    public assists: number;
    public games: number;
    public goals: number;
    public substitutes: number;
    public yellows: number;
    public reds: number;
}
