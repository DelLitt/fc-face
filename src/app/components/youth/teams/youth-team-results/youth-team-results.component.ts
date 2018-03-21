import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../../../../services/log.service';
import { Team } from '../../../../model/team';
import { SiteMapService } from '../../../../services/site-map.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsRepositoryService } from '../../../../services/teams-repository.service';
import { Tourney } from '../../../../model/tourney';

@Component({
  selector: 'app-youth-team-results',
  templateUrl: './youth-team-results.component.html',
  styleUrls: ['./youth-team-results.component.scss']
})

export class YouthTeamResultsComponent implements OnInit {
  private _loaded: boolean;
  private _teamId: number;
  private _team: Team = new Team();
  private _tourneyId: number;
  private _tourney: Tourney = new Tourney();

  constructor(
    private teamsRepository: TeamsRepositoryService,
    private siteMapService: SiteMapService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadTeam();
  }

  private loadTeam() {
    this._loaded = false;
    this._teamId = this.siteMapService.getCurrentYouthTeamId(this.activatedRoute.parent.snapshot);

    this.teamsRepository.getTeam(this._teamId)
    .then(result => {
      this._team = result;
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the team (id:${this._teamId}) successfully.`);
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }

  public get tourneyId(): number {
    return this._tourneyId;
  }

  @Input() public set tourneyId(value: number) {
    this.logger.logError(`'${(<any>this).constructor.name}' setting tourneyId ${value}.`);
    this._tourneyId = value;
  }

  private tourneyChanged(selectedTourney: Tourney) {
    this.logger.logDebug(`'${(<any>this).constructor.name}'. Tourney changed to ${selectedTourney.id}.`);
    this._tourney = selectedTourney;
  }

}
