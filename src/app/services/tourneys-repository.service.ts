import { Injectable } from '@angular/core';
import { Tourney } from '../model/tourney';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { RoundSolid } from '../model/rounds/round-solid';
import { Round } from '../model/rounds/round';
import { GamesDay } from '../model/games/games-day';
import { Game } from '../model/games/game';
import { Team } from '../model/teams/team';

@Injectable()
export class TourneysRepositoryService {

  constructor(
    private dataSource: DataSourceService,
    private logger: LogService
  ) { }


  public getTeamTourneys(teamId: number): Promise<Tourney[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading tourneys.`);

      this.dataSource.getTeamTourneys(teamId)
        .then(result => {
          if (result) {
            const tourneys: Tourney[] = this.convertResponseToTourneys(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded tourneys successfully.`);
            resolve(tourneys);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load tourneys!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  public getScheduler(tourneyIds: number[]): Promise<RoundSolid[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading scheduler.`);

      this.dataSource.getScheduler(tourneyIds)
        .then(result => {
          if (result) {
            const scheduler: RoundSolid[] = this.convertResponseToScheduler(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded scheduler successfully.`);
            resolve(scheduler);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load tourneys!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  private convertResponseToTourneys(response: Array<any>): Tourney[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Tourney>(); }

    const tourneys: Tourney[] = new Array<Tourney>();
    data.forEach(element => {
      const tourney = new Tourney();
      tourney.id = element.id;
      tourney.i18nKey = element.i18nKey;
      tourney.name = element.name;
      tourney.tourneyTypeId = element.tourneyTypeId;
      tourney.cityId = element.cityId;
      tourney.dateStart = new Date(element.dateStart);
      tourney.dateEnd = new Date(element.dateEnd);

      tourneys.push(tourney);
    });

    return tourneys;
  }

  // -------------------------------------
  // Private methods
  // -------------------------------------

  private convertResponseToScheduler(response: Array<any>): RoundSolid[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<RoundSolid>(); }

    const scheduler: RoundSolid[] = new Array<RoundSolid>();
    data.forEach(element => {
      const roundSolid = new RoundSolid();
      roundSolid.round = this.convertResponseToRound(element.round);
      roundSolid.gamesDays = this.convertResponseToGamesDays(element.gamesDays);
      roundSolid.dateBreak = new Date(element.dateBreak);

      scheduler.push(roundSolid);
    });

    return scheduler;
  }

  private convertResponseToGamesDays(response: any): GamesDay[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<GamesDay>(); }

    const gamesDays: GamesDay[] = new Array<GamesDay>();
    data.forEach(element => {
      const gamesDay = new GamesDay();
      gamesDay.games = this.convertResponseToGames(element.games);
      gamesDay.date = new Date(element.date);

      gamesDays.push(gamesDay);
    });

    return gamesDays;
  }

  private convertResponseToGames(response: Array<any>): Game[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Game>(); }

    const games: Game[] = new Array<Game>();
    data.forEach(element => {
      const game = new Game();
      // Unnecessary for scheduler
      // game.round = this.convertResponseToRound(element.round);
      game.id = element.id;
      game.home = this.convertResponseToTeam(element.home);
      game.away = this.convertResponseToTeam(element.away);
      game.scoreHome = element.scoreHome;
      game.scoreAway = element.scoreAway;
      game.scoreAddHome = element.scoreAddHome;
      game.scoreAddAway = element.scoreAddAway;
      game.penaltiesHome = element.penaltiesHome;
      game.penaltiesAway = element.penaltiesAway;
      game.played = element.played;
      game.date = new Date(element.date);

      games.push(game);
    });

    return games;
  }

  private convertResponseToTeam(response: any): Team {
    if (!response) { return new Team(); }

    const team = new Team();
    team.id = response.id;
    team.name = response.name;
    team.i18nKey = response.i18nKey;

    return team;
  }

  private convertResponseToRound(response: any): Round {
    if (!response) { return new Round(); }

    const round = new Round();
    round.id = response.id;
    round.name = response.name;
    round.i18nKey = response.i18nKey;
    round.tourney = this.convertResponseToTourney(response.tourney);

    return round;
  }

  private convertResponseToTourney(response: any): Tourney {
    if (!response) { return new Tourney(); }

    const tourney = new Tourney();
    tourney.id = response.id;
    tourney.name = response.name;
    tourney.i18nKey = response.i18nKey;

    return tourney;
  }

}
