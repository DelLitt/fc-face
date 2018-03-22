import { Injectable } from '@angular/core';
import { Tourney } from '../model/tourney';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';

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

}
