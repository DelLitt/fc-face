
import { OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../../../services/log.service';
import { SiteMapService } from '../../../services/site-map.service';
import { TeamsRepositoryService } from '../../../services/teams-repository.service';
import { Team } from '../../../model/teams/team';
import { Tourney } from '../../../model/tourney';


export class YouthTeamView  implements OnInit {
  protected _loaded: boolean;
  protected _teamId: number;
  protected _team: Team = new Team();
  protected _tourneyId: number;
  protected _tourney: Tourney = new Tourney();

  constructor(
    protected teamsRepository: TeamsRepositoryService,
    protected siteMapService: SiteMapService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadConfiguration();
  }

  private loadConfiguration() {
    this._loaded = false;
    this.siteMapService.getCurrentYouthTeamId(this.activatedRoute.parent.snapshot)
    .then(result => {
      this._teamId = result;
      this.loadTeam();
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }

  private loadTeam() {
    this.teamsRepository.getTeam(this._teamId)
    .then(result => {
      this._team = result;
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' has loaded the team (id:${this._teamId}) successfully.`);
      this.configurationLoaded();
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }

  public get tourneyId(): number {
    return this._tourneyId;
  }

  @Input() public set tourneyId(value: number) {
    this._tourneyId = value;
  }

  protected configurationLoaded() {
  }

  private tourneyChanged(selectedTourney: Tourney) {
    this.logger.logDebug(`'${(<any>this).constructor.name}'. Tourney changed to ${selectedTourney.id}.`);
    this._tourney = selectedTourney;
  }

}
