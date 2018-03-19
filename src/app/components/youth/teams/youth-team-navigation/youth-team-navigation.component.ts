import { Component, OnInit } from '@angular/core';
import { SiteMapService } from '../../../../services/site-map.service';
import { LogService } from '../../../../services/log.service';
import { YouthTeamPageActivation } from '../../../../model/app/youth-team-page-activation';

@Component({
  selector: 'app-youth-team-navigation',
  templateUrl: './youth-team-navigation.component.html',
  styleUrls: ['./youth-team-navigation.component.scss']
})
export class YouthTeamNavigationComponent implements OnInit {

  private youthTeamPageActivation: YouthTeamPageActivation;

  constructor(
    private siteMapService: SiteMapService,
    private logger: LogService
  ) {
    this.youthTeamPageActivation = siteMapService.youthTeamPageActivation;
  }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

}
