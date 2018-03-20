import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { Standing } from '../model/standing';

@Injectable()
export class StandingsRepositoryService {

  constructor(
    private dataSource: DataSourceService,
    private logger: LogService
  ) { }

  public getStandings(tourneyId: number): Promise<Standing[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading standings.`);

      this.dataSource.getStandings(tourneyId)
        .then(result => {
          if (result) {
            const standings: Standing[] = this.convertResponseToStandings(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded standings successfully.`);
            resolve(standings);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load standings!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  private convertResponseToStandings(response: Array<any>): Standing[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Standing>(); }

    const standings: Standing[] = new Array<Standing>();
    data.forEach(element => {
      const standing = new Standing();
      standing.tourneyId = element.tourneyId;
      standing.draws = element.draws;
      standing.games = element.games;
      standing.goalsAgainst = element.goalsAgainst;
      standing.goalsFor = element.goalsFor;
      standing.loses = element.loses;
      standing.points = element.points;
      standing.position = element.position;
      standing.teamId = element.teamId;
      standing.teamName = element.teamName;
      standing.wins = element.wins;

      standings.push(standing);
    });

    return standings;
  }

}
