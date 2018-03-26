import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { PlayerStatistics } from '../model/player-statistics';
import { Person } from '../model/person';
import { ConfigurationService } from './configuration/configuration.service';

@Injectable()
export class StatisticsService {

  constructor(
    private configuration: ConfigurationService,
    private dataSource: DataSourceService,
    private logger: LogService
  ) { }

  public getPlayersStatistics(teamId: number, tourneyIds: number[]): Promise<PlayerStatistics[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading players statistics.`);

      this.dataSource.getPlayersStatistics(teamId, tourneyIds)
        .then(result => {
          if (result) {
            const playerStatistics: PlayerStatistics[] = this.convertResponseToPlayersStatistics(result, teamId);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded  players statistics successfully.`);
            resolve(playerStatistics);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load  players statistics!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });

    });
  }

  private convertResponseToPlayersStatistics(response: Array<any>, teamId: number): PlayerStatistics[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<PlayerStatistics>(); }

    const playersStatistics: PlayerStatistics[] = new Array<PlayerStatistics>();
    data.forEach(element => {
      const playerStatistics = new PlayerStatistics();
      playerStatistics.teamId = teamId;
      // playerStatistics.person = this.convertResponseToPerson(element.person);
      playerStatistics.name = element.person.nameLast + ' ' + element.person.nameFirst;
      playerStatistics.personNumber = element.person.personNumber;
      playerStatistics.age = element.person.age;
      playerStatistics.assists = element.assists;
      playerStatistics.games = element.games;
      playerStatistics.reds = element.reds;
      playerStatistics.substitutes = element.substitutes;
      playerStatistics.tourneyId = element.tourneyId;
      playerStatistics.yellows = element.yellows;

      if (element.person.personRoleId !== this.configuration.goalkeeperRoleId) {
        playerStatistics.goals = element.goals;
        playerStatistics.goalkeeperGoals = -(element.addIntValue);
      } else {
        playerStatistics.goals = -(element.goals);
        playerStatistics.goalkeeperGoals = element.addIntValue;
      }

      playersStatistics.push(playerStatistics);
    });

    return playersStatistics;
  }

  private convertResponseToPerson(response: any): Person {
    if (!response) { return null; }

    const person = new Person();
    person.id = response.id;
    person.personNumber = response.personNumber;
    person.name = response.nameLast + ' ' + response.nameFirst;
    person.age = response.age;
    person.personRoleId = response.personRoleId;

    return person;
  }

}
