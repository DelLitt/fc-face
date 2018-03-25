import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { ConfigurationService } from '../../../services/configuration/configuration.service';
import { TourneysRepositoryService } from '../../../services/tourneys-repository.service';
import { Tourney } from '../../../model/tourney';
import { ResultsView } from '../results-view';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent extends ResultsView {
  private _selectedTeamId = 0;
  private _tourneys: Tourney[];
  private _tourneyIds: number[];

  constructor(
    private tourneysRepository: TourneysRepositoryService,
    protected configuration: ConfigurationService,
    protected logger: LogService
  ) {
    super(
      configuration,
      logger
    );
  }

  @Input() public set selectedTeamId(value: number) {
    this._selectedTeamId = value;
    this.init();
  }

  public get selectedTeamId(): number {
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
