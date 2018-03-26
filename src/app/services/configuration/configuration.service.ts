import { Injectable } from '@angular/core';
import { LogService } from '../log.service';

@Injectable()
export class ConfigurationService {

  constructor(
    private logger: LogService
  ) { }

  public get mainTeamId(): Promise<number> {
    return null;
  }

  public get reserveTeamId(): Promise<number> {
    return null;
  }

  public get activeTeamsIds(): Promise<number[]> {
    return null;
  }

  public get youthTeamsMap(): Promise<Map<string, number>> {
    return null;
  }

  // TODO: configuration should be loaded before routing events.
  // It allows use values instead of primises
  public get goalkeeperRoleId(): number {
    return null;
  }

}
