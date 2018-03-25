import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SiteMapService } from '../../../../services/site-map.service';
import { TeamsRepositoryService } from '../../../../services/teams-repository.service';
import { LogService } from '../../../../services/log.service';
import { YouthTeamView } from '../youth-team-view';
import { TourneysRepositoryService } from '../../../../services/tourneys-repository.service';
import { Tourney } from '../../../../model/tourney';


@Component({
  selector: 'app-youth-team-games',
  templateUrl: './youth-team-games.component.html',
  styleUrls: ['./youth-team-games.component.scss']
})
export class YouthTeamGamesComponent extends YouthTeamView implements OnInit {
  private _loadedTourneys: boolean;
  private _tourneys: Tourney[];
  private _tourneyIds: number[] = new Array<number>();

  constructor(
    private tourneysRepository: TourneysRepositoryService,
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

  protected configurationLoaded() {
    this.loadTourneys();
  }

  private loadTourneys() {
    this._loadedTourneys = false;
    this.tourneysRepository.getTeamTourneys(this._teamId)
    .then(result => {
      this._tourneys = result;
      this.setTourneyIds();

      this._loadedTourneys = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' has loaded the tourneys of team (id:${this._teamId}) successfully.`);
    });
  }

  private setTourneyIds() {
    if (this._tourneys.length === 0) { return; }
    this._tourneyIds = this._tourneys.map(t => t.id);
  }

}
