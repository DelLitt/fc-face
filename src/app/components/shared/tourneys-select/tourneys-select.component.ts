import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TourneysRepositoryService } from '../../../services/tourneys-repository.service';
import { LogService } from '../../../services/log.service';
import { Tourney } from '../../../model/tourney';

@Component({
  selector: 'app-tourneys-select',
  templateUrl: './tourneys-select.component.html',
  styleUrls: ['./tourneys-select.component.scss']
})
export class TourneysSelectComponent implements OnInit {
  private _loaded: boolean;
  private _selectedTourneyId = 0;
  private _selectedTourney: Tourney;
  private _tourneys: Tourney[];
  private _teamId: number;

  @Output() selectedTourneyIdChange = new EventEmitter();
  @Output() tourneyChange: EventEmitter<any> = new EventEmitter();

  @Input() public set teamId(value: number) {
    this._teamId = value;
    this.init();
  }

  public get selectedTourneyId(): number {
    return this._selectedTourneyId;
  }

  @Input() public set selectedTourneyId(value: number) {
    this._selectedTourneyId = value;
    this.raiseTourneyChangedEvent();
  }

  constructor(
    private tourneysRepository: TourneysRepositoryService,
    private logger: LogService
  ) { }

  ngOnInit() {
  }

  public get selectedTourney(): Tourney {
    this.setSelectedTourney();
    return this._selectedTourney;
  }

  private init() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadTourneys();
  }

  private loadTourneys() {
    this._loaded = false;
    this.tourneysRepository.getTeamTourneys(this._teamId)
    .then(result => {
      this._tourneys = result;

      if (!this.selectedTourneyId && this._tourneys instanceof Array && this._tourneys.length > 0) {
        this.selectedTourneyId = this._tourneys[0].id;
      }

      this._loaded = true;
      // tslint:disable-next-line:max-line-length
      this.logger.logInfo(`'${(<any>this).constructor.name}' has loaded tourneys (${this._tourneys.length}) of team (id:${this._teamId}) successfully.`);
    });
  }

  private setSelectedTourney() {
    if (!(this._tourneys instanceof Array)) { return; }

    if (!(this._selectedTourney instanceof Tourney) || this._selectedTourney.id === this.selectedTourneyId) {
      this._selectedTourney = this._tourneys.find(t => t.id === this.selectedTourneyId);
    }
  }

  private changeSelectedTourney($event) {
    this.selectedTourneyId = $event.value;
  }

  private raiseTourneyChangedEvent() {
    this.selectedTourneyIdChange.emit(this._selectedTourneyId);
    if (this.selectedTourney instanceof Tourney) {
      this.tourneyChange.emit(this.selectedTourney);
    }
  }

}
