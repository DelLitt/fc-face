import { Injectable } from '@angular/core';
import { PublicationVisibility } from '../model/publications/publication-visibility';
import { PersonRoleGroup } from '../model/person-role-group';

@Injectable()
export class DataSourceService {

  constructor() { }

  public getPublicationEntity(id: number, entityType: string): Promise<object> {
    return null;
  }

  public getPublicationEntities(
    count: number,
    skip: number,
    entityType: string,
    visibility: PublicationVisibility[]
  ): Promise<object[]> {
    return null;
  }

  public getEntitiesCount(
    entityType: string,
    visibility: PublicationVisibility[]
  ): Promise<number> {
    return null;
  }

  public getPersons(count: number, skip: number, personRoleGroup: PersonRoleGroup): Promise<object[]> {
    return null;
  }

  public getTeam(id: number): Promise<object> {
    return null;
  }

  public getTeams(teamsIds: number[]): Promise<object[]> {
    return null;
  }

  public getCoachTeams(coachIds: number[]): Promise<object[]> {
    return null;
  }

  public getStandings(tourneyId: number): Promise<object[]> {
    return null;
  }

  public getTeamTourneys(teamId: number): Promise<object[]> {
    return null;
  }

  public getScheduler(tourneyIds: number[]): Promise<object[]> {
    return null;
  }

  public getPlayersStatistics(teamId: number, tourneyIds: number[]): Promise<object[]> {
    return null;
  }

  public search(text: string, count: number, skip: number = 0): Promise<any> {
    return null;
  }
}
