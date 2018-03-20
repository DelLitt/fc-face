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
  private tourneys: Tourney[];
  private selected: number;

  @Input() teamId: number;
  @Output() tourneyChanged: EventEmitter<any> = new EventEmitter();

  constructor(
    private tourneysRepository: TourneysRepositoryService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadTourneys();
  }

  private loadTourneys() {
    this._loaded = false;
    this.tourneysRepository.getTourneys(this.teamId)
    .then(result => {
      this.tourneys = result;
      this.selected = this.tourneys[0].id;
      this.riseTourneyChanged({ value: this.selected });
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the tourneys of team (id:${this.teamId}) successfully.`);
    });
  }

  private riseTourneyChanged(event) {
    this.logger.logDebug(`'${(<any>this).constructor.name}' has changed tourney to ${event.value}.`);
    this.tourneyChanged.emit(event.value);
  }

}
