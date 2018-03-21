import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SiteMapService } from '../../../../services/site-map.service';
import { TeamsRepositoryService } from '../../../../services/teams-repository.service';
import { LogService } from '../../../../services/log.service';
import { YouthTeamView } from '../youth-team-view';


@Component({
  selector: 'app-youth-team-games',
  templateUrl: './youth-team-games.component.html',
  styleUrls: ['./youth-team-games.component.scss']
})
export class YouthTeamGamesComponent extends YouthTeamView {

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
