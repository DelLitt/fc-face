import { DataSourceService } from '../data-source.service';
import { _fakePublicationsStorage } from './fake-publications-storage';
import { PublicationVisibility } from '../../model/publications/publication-visibility';
import { PersonRoleGroup } from '../../model/person-role-group';
import { _fakeEmployees } from './fake-employee-storage';
import { _fakeYouthTeams } from './fake-youth-team-storage';
import { _fakeStandings } from './fake-standing-storage';
import { _fakeTourneys } from './fake-tourneys-storage';
import { Injectable } from '@angular/core';
import { _fakeRoundsSolid } from './fake-round-solid-items';
import { _fakePlayersStatistics } from './fake-players-statistics';

@Injectable()
export class FakeDataSourceService extends DataSourceService {

    public getPublicationEntity(id: number, entityType: string): Promise<object> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const entity: object = _fakePublicationsStorage[entityType].find(p => p.id === id);
          resolve(entity);
        }, 1000);
      });
    }

    public getPublicationEntities(count: number, skip: number, entityType: string, visibility: PublicationVisibility[]): Promise<object[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const entities: Array<object> =
            _fakePublicationsStorage[entityType].filter(e => visibility.includes(e.visibility)).slice(skip, skip + count);
          resolve(entities);
        }, 1000);
      });
    }

    public getEntitiesCount(entityType: string, visibility: PublicationVisibility[]): Promise<number> {
      return new Promise((resolve, reject) => {
        resolve(_fakePublicationsStorage[entityType].filter(e => visibility.includes(e.visibility)).length);
      });
    }

    public getPersons(count: number, skip: number, personRoleGroup: PersonRoleGroup): Promise<object[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const persons: Array<object> = _fakeEmployees.slice(skip, skip + count);
          resolve(persons);
        }, 1000);
      });
    }

    public getTeam(id: number): Promise<object> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const team: object = _fakeYouthTeams.find(t => t.id === id);
          resolve(team);
        }, 1000);
      });
    }

    public getTeams(teamsIds: number[]): Promise<object[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const teams: Array<object> =
            _fakeYouthTeams.filter(t => teamsIds.includes(t.id));
          resolve(teams);
        }, 1000);
      });
    }

    public getCoachTeams(coachIds: number[]): Promise<object[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const teams: Array<object> =
            _fakeYouthTeams.filter(t => coachIds.includes(t.coach));
          resolve(teams);
        }, 1000);
      });
    }

    public getStandings(tourneyId: number): Promise<object[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const standings: Array<object> =
            _fakeStandings.filter(s => s.tourneyId === tourneyId);
          resolve(standings);
        }, 1000);
      });
    }

    public getTeamTourneys(teamId: number): Promise<object[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const tourneys: Array<object> =
            _fakeTourneys.filter(s => s.teams.includes(teamId));
          resolve(tourneys);
        }, 1000);
      });
    }

    public getScheduler(tourneyIds: number[]): Promise<object[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(_fakeRoundsSolid);
        }, 100);
      });
    }

    public getPlayersStatistics(teamId: number, tourneyIds: number[]): Promise<object[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const players: Array<object> =
          _fakePlayersStatistics.filter(s => s.teamId === teamId && tourneyIds.includes(s.tourneyId));
          resolve(players);
        }, 1000);
      });
    }

    public search(text: string, count: number, skip: number = 0): Promise<any> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = {
            items: [],
            totalCount: 0
          };

          const publicationsData: any = this.doSearch(_fakePublicationsStorage['publications'], text);
          this.setClassification(publicationsData.items, 'publications');
          const galleriesData: any = this.doSearch(_fakePublicationsStorage['galleries'], text);
          this.setClassification(galleriesData.items, 'galleries');
          const videosData: any = this.doSearch(_fakePublicationsStorage['videos'], text);
          this.setClassification(videosData.items, 'videos');

          const allItems = [];

          publicationsData.items.forEach(element => {
            allItems.push(element);
          });
          galleriesData.items.forEach(element => {
            allItems.push(element);
          });
          videosData.items.forEach(element => {
            allItems.push(element);
          });

          result.items = allItems.slice(skip, skip + count);
          result.totalCount = publicationsData.totalCount
            + galleriesData.totalCount
            + videosData.totalCount;

          resolve(result);
        }, 1000);
      });
    }

    private doSearch(source: any[], text: string): object {
      const items = source.filter(entity => {
        // const searchExpression = `/${text}/gi`;
        return this.isPropertyContainsText(entity, 'title', text)
          || this.isPropertyContainsText(entity, 'header', text)
          || this.isPropertyContainsText(entity, 'lead', text)
          || this.isPropertyContainsText(entity, 'content', text);
      });

      return {
        items: items,
        totalCount: items.length
      };
    }

    private isPropertyContainsText(target: object, propertyName: string, searchText: string): boolean {
      return target[propertyName]
        && target[propertyName].search instanceof Function
        && target[propertyName].search(searchText) > -1;
    }

    private setClassification(source: any[], classification: string) {
      source.forEach(element => {
        element.classification = classification;
      });
    }
  }
