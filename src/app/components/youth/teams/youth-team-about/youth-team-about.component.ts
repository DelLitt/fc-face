import { Component, OnInit } from '@angular/core';
import { YouthTeamView } from '../youth-team-view';
import { TeamsRepositoryService } from '../../../../services/teams-repository.service';
import { SiteMapService } from '../../../../services/site-map.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LogService } from '../../../../services/log.service';
import { Team } from '../../../../model/teams/team';
import { TeamStaticModel } from '../../../../model/teams/team-static-model';

@Component({
  selector: 'app-youth-team-about',
  templateUrl: './youth-team-about.component.html',
  styleUrls: ['./youth-team-about.component.scss']
})
export class YouthTeamAboutComponent extends YouthTeamView implements OnInit {
  private _description: string = null;

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

  private get description(): string {
    if (!this._description) {
      if (this._team instanceof Team && this._team.staticModel instanceof TeamStaticModel) {
          this._description = this._team.staticModel.description;
        }
    }

    return this._description;
  }

}
