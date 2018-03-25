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
  private _image: string = null;
  private _players: string = null;
  private _coaches: string = null;
  private _coachesTitleKey: string = null;
  private _description: string = null;

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

  private getImage(src: string, width: number, height: number): string {
    if (!src) { return ''; }
    return this.imageUtility.addFileVariantSize(src, width, height);
  }

  private get players(): string {
    if (!this._players
      && this.hasStaticModel
      && this._team.staticModel.players instanceof Array) {
      this._players =
        this._team.staticModel.players
          .map(p => p.personNumber + '. ' + p.name)
          .join(', ');
    }

    return this._players;
  }

  private get coaches(): string {
    if (!this._coaches
      && this.hasStaticModel
      && this._team.staticModel.coaches instanceof Array) {
      this._coaches =
        this._team.staticModel.coaches
          .map(p => p.name)
          .join(', ');
    }

    return this._coaches;
  }

  private get coachesVariant(): string {
    if (!this._coachesTitleKey
      && this.hasStaticModel
      && this._team.staticModel.coaches instanceof Array) {
      this._coachesTitleKey =
        this._team.staticModel.coaches.length > 1
        ? 'COACHES'
        : 'COACH_DEF';
    }

    return this._coachesTitleKey;
  }

  private get description(): string {
    if (!this._description && this.hasStaticModel) {
      this._description = this._team.staticModel.description;
    }

    return this._description;
  }

  private get image(): string {
    if (!this._image && this.hasStaticModel && this._team.staticModel.img.length > 0) {
      this._image = this._team.staticModel.img;
    }

    return this._image;
  }

  private get hasStaticModel(): boolean {
    return this._team instanceof Team && this._team.staticModel instanceof TeamStaticModel;
  }

}
