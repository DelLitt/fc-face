import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { ConfigurationService } from '../../../services/configuration/configuration.service';
import { TourneysRepositoryService } from '../../../services/tourneys-repository.service';
import { Tourney } from '../../../model/tourney';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  private _loaded: boolean;
  private _teamIds = new Array<number>();
  private _selectedTeamId = 0;
  private _tourneys: Tourney[];
  private _tourneyIds: number[] = new Array<number>();

  constructor(
    private tourneysRepository: TourneysRepositoryService,
    private configuration: ConfigurationService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

  private loadTeamIds() {
    this.configuration.activeTeamsIds
    .then(result => {
      this._teamIds = result instanceof Array ? result : Array<number>();
    });
  }

  private set slectedTeamId(value: number) {
    this._selectedTeamId = value;
    this.init();
  }

  private get slectedTeamId(): number {
    return this._selectedTeamId;
  }

  private init() {
    this.loadTourneys();
  }

  private loadTourneys() {
    this._loaded = false;
    this.tourneysRepository.getTeamTourneys(this._selectedTeamId)
    .then(result => {
      this._tourneys = result;

      if (this._tourneys instanceof Array) {
        this._tourneyIds = this._tourneys.map(t => t.id);
      }

      this._loaded = true;
      // tslint:disable-next-line:max-line-length
      this.logger.logInfo(`'${(<any>this).constructor.name}' has loaded tourneys (${this._tourneys.length}) of team (id:${this._selectedTeamId}) successfully.`);
    });
  }

}
