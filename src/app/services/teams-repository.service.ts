import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { Team } from '../model/team';

@Injectable()
export class TeamsRepositoryService {
  private _team: Team = new Team();

  constructor(
    private dataSource: DataSourceService,
    private logger: LogService
  ) { }

  public getTeam(id: number): Promise<Team> {
    return new Promise((resolve, reject) => {
      if (this._team.id === id) { resolve( this._team); }

      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading the team (id:${id}).`);

      this.dataSource.getTeam(id)
        .then(result => {
          if (result) {
            this._team = this.convertResponseToTeam(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the team (id:${id}) successfully.`);
            resolve( this._team);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' not found team (id:${id})!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  public getCoachTeams(coachIds: number[]): Promise<Team[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading coach teams.`);

      this.dataSource.getCoachTeams(coachIds)
        .then(result => {
          if (result) {
            const teams: Team[] = this.convertResponseToTeams(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded coach teams successfully.`);
            resolve(teams);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load coach teams!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  private convertResponseToTeams(response: Array<any>): Team[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Team>(); }

    const teams: Team[] = new Array<Team>();
    data.forEach(element => {
      const team = new Team();
      team.id = element.id;
      team.name = element.name;
      team.coachId = element.coach;

        teams.push(team);
      });

    return teams;
  }

  private convertResponseToTeam(response: any): Team {
    if (!response) { return null; }

    const team = new Team();
    team.id = response.id;
    team.name = response.name;
    team.coachId = response.coachId;

    return team;
  }

}
