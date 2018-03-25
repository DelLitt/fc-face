import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { Team } from '../model/teams/team';
import { TeamStaticModel } from '../model/teams/team-static-model';
import { TeamStaticPerson } from '../model/teams/team-static-person';
import { ConfigurationService } from './configuration/configuration.service';

@Injectable()
export class TeamsRepositoryService {
  private _team: Team = new Team();

  constructor(
    private configuration: ConfigurationService,
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

      this.dataSource.getTeams(coachIds)
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

  public getActiveTeams(): Promise<Team[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading active teams.`);

      this.configuration.activeTeamsIds
        .then(config => {
          this.dataSource.getTeams(config)
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
    team.i18nKey = response.i18nKey;
    team.img = response.img;
    team.href = response.href;
    team.coachId = response.coachId;
    team.staticModel = this.convertResponseToTeamStaticModel(response.staticModel);

    return team;
  }

  private convertResponseToTeamStaticModel(response: any): TeamStaticModel {
    if (!response) { return null; }

    const staticModel = new TeamStaticModel();
    staticModel.img = response.img;
    staticModel.description = response.description;
    staticModel.coaches = this.convertResponseToTeamStaticPersonsTransform(response.coaches);
    staticModel.players = this.convertResponseToTeamStaticPersonsDirect(response.players);

    return staticModel;
  }

  private convertResponseToTeamStaticPersonsDirect(response: Array<any>): TeamStaticPerson[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<TeamStaticPerson>(); }

    const teamStaticPersons: TeamStaticPerson[] = new Array<TeamStaticPerson>();
    data.forEach(element => {
      const teamStaticPerson = new TeamStaticPerson();
      teamStaticPerson.id = element.id;
      teamStaticPerson.name = element.name;
      teamStaticPerson.i18nKey = element.i18nKey;
      teamStaticPerson.img = element.img;
      teamStaticPerson.href = element.href;
      teamStaticPerson.personNumber = element.personNumber;

      teamStaticPersons.push(teamStaticPerson);
    });

    return teamStaticPersons;
  }

  private convertResponseToTeamStaticPersonsTransform(response: Array<any>): TeamStaticPerson[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<TeamStaticPerson>(); }

    const teamStaticPersons: TeamStaticPerson[] = new Array<TeamStaticPerson>();
    data.forEach(element => {
      const teamStaticPerson = new TeamStaticPerson();
      teamStaticPerson.id = element.id;
      teamStaticPerson.img = element.img;
      teamStaticPerson.name = element.nameFirst + ' ' + element.nameLast;

      teamStaticPersons.push(teamStaticPerson);
    });

    return teamStaticPersons;
  }

}
