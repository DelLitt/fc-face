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

  public get youthTeamsMap(): Promise<Map<string, number>> {
    return null;
  }

}
