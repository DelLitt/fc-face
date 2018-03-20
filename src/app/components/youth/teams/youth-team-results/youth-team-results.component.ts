import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../../services/log.service';

@Component({
  selector: 'app-youth-team-results',
  templateUrl: './youth-team-results.component.html',
  styleUrls: ['./youth-team-results.component.scss']
})
export class YouthTeamResultsComponent implements OnInit {

  constructor(
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

  private tourneyChanged(event) {
    this.logger.logDebug(`'${(<any>this).constructor.name}' event is ${event}.`);
  }

}
