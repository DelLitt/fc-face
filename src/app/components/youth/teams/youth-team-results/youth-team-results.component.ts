import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../../services/log.service';
import { Team } from '../../../../model/team';
import { SiteMapService } from '../../../../services/site-map.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsRepositoryService } from '../../../../services/teams-repository.service';

@Component({
  selector: 'app-youth-team-results',
  templateUrl: './youth-team-results.component.html',
  styleUrls: ['./youth-team-results.component.scss']
})

export class YouthTeamResultsComponent implements OnInit {
  private _loaded: boolean;
  private teamId: number;
  private team: Team = new Team();
  private tourneyId: number;

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
    this.teamId = this.siteMapService.getCurrentYouthTeamId(this.activatedRoute.parent.snapshot);

    this.teamsRepository.getTeam(this.teamId)
    .then(result => {
      this.team = result;
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the team (id:${this.teamId}) successfully.`);
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }

  private tourneyChanged(event) {
    this.logger.logDebug(`'${(<any>this).constructor.name}'. Tourney changed to ${event}.`);
    this.tourneyId = event;
  }

}
