import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SiteMapService } from '../../../../services/site-map.service';
import { TeamsRepositoryService } from '../../../../services/teams-repository.service';
import { LogService } from '../../../../services/log.service';
import { YouthTeamView } from '../youth-team-view';

@Component({
  selector: 'app-youth-team-results',
  templateUrl: './youth-team-results.component.html',
  styleUrls: ['./youth-team-results.component.scss']
})
export class YouthTeamResultsComponent extends YouthTeamView {

  constructor(
    protected teamsRepository: TeamsRepositoryService,
    protected siteMapService: SiteMapService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected logger: LogService
  ) {
    super(
      teamsRepository,
      siteMapService,
      router,
      activatedRoute,
      logger
    );
  }

}
