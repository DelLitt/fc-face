import { Component, OnInit } from '@angular/core';
import { TeamsRepositoryService } from '../../../services/teams-repository.service';
import { SiteMapService } from '../../../services/site-map.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../../../services/log.service';
import { Team } from '../../../model/teams/team';
import { ConfigurationService } from '../../../services/configuration/configuration.service';

@Component({
  selector: 'app-youth-teams',
  templateUrl: './youth-teams.component.html',
  styleUrls: ['./youth-teams.component.scss']
})
export class YouthTeamsComponent implements OnInit {
  private _loaded: boolean;
  private _teamId: number;
  private team: Team = new Team();

  constructor(
    private configuration: ConfigurationService,
    private teamsRepository: TeamsRepositoryService,
    private siteMapService: SiteMapService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadConfiguration();

    this.siteMapService.navigated.subscribe((event) => {
      if (event.url.startsWith('/youth/teams')) {
        this.loadConfiguration();
      }
    });
  }

  private loadConfiguration() {
    this._loaded = false;
    this.siteMapService.getCurrentYouthTeamId(this.activatedRoute.snapshot)
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
      this.team = result;
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the team (id:${this._teamId}) successfully.`);
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }

  private get youthTeamI18nKey(): string {
    return (this.activatedRoute.snapshot.params['key'] || '').toUpperCase();
  }

}
