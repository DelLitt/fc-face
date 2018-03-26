import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../../services/configuration/configuration.service';
import { LogService } from '../../../services/log.service';
import { ResultsView } from '../results-view';

@Component({
  selector: 'app-players-statistics-view',
  templateUrl: './players-statistics-view.component.html',
  styleUrls: ['./players-statistics-view.component.scss']
})
export class PlayersStatisticsViewComponent extends ResultsView {

  constructor(
    protected configuration: ConfigurationService,
    protected logger: LogService
  ) {
    super(
      configuration,
      logger
    );
  }


}
