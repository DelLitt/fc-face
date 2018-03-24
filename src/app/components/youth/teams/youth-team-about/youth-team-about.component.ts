import { Component, OnInit } from '@angular/core';
import { YouthTeamView } from '../youth-team-view';
import { TeamsRepositoryService } from '../../../../services/teams-repository.service';
import { SiteMapService } from '../../../../services/site-map.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LogService } from '../../../../services/log.service';
import { Team } from '../../../../model/teams/team';
import { TeamStaticModel } from '../../../../model/teams/team-static-model';
import { ImageUtilityService } from '../../../../services/utilities/image-utility.service';

@Component({
  selector: 'app-youth-team-about',
  templateUrl: './youth-team-about.component.html',
  styleUrls: ['./youth-team-about.component.scss']
})
export class YouthTeamAboutComponent extends YouthTeamView implements OnInit {
  private _description: string = null;
  private _image: string = null;

  constructor(
    private imageUtility: ImageUtilityService,
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

  private get image(): string {
    if (!this._description) {
      if (this._team instanceof Team && this._team.staticModel instanceof TeamStaticModel) {
          this._image = this._team.staticModel.img;
        }
    }

    return this._image;
  }

  private getImage(src: string, width: number, height: number): string {
    if (!src) { return ''; }
    return this.imageUtility.addFileVariantSize(src, width, height);
  }

}
