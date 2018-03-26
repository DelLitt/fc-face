import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';

const MainTeamId = 2091;
const ReserveTeamId = 2093;
const GoalkeeperRoleId = 31;
const YoutTeamsMappingTable = new Map<string, number>([
  ['U11', 2093],
  ['U12', 2091],
  ['U13', 2090],
  ['U14', 2089],
  ['U15', 2088],
  ['U16', 2086],
  ['U17', 2083],
  ['U18', 2085]
]);

@Injectable()
export class CilentConfigurationService extends ConfigurationService {

  public get mainTeamId(): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(MainTeamId); }, 500);
    });
  }

  public get reserveTeamId():  Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(ReserveTeamId); }, 500);
    });
  }

  public get activeTeamsIds(): Promise<number[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve([MainTeamId, ReserveTeamId]); }, 500);
    });
  }

  public get youthTeamsMap(): Promise<Map<string, number>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(YoutTeamsMappingTable); }, 500);
    });
  }

  public get goalkeeperRoleId(): number {
    return GoalkeeperRoleId;
  }
}
