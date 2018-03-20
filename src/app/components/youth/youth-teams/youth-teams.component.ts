import { Component, OnInit } from '@angular/core';
import { TeamsRepositoryService } from '../../../services/teams-repository.service';
import { SiteMapService } from '../../../services/site-map.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../../../services/log.service';
import { Team } from '../../../model/team';

@Component({
  selector: 'app-youth-teams',
  templateUrl: './youth-teams.component.html',
  styleUrls: ['./youth-teams.component.scss']
})
export class YouthTeamsComponent implements OnInit {

  private _loaded: boolean;
  private team: Team = new Team();
  private _teamId: number;

  constructor(
    private teamsRepository: TeamsRepositoryService,
    private siteMapService: SiteMapService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logWarning(
      `'${(<any>this).constructor.name}'. ${this.siteMapService.getCurrentYouthTeamId(this.activatedRoute.snapshot)}'`);
      this.loadTeam();

      this.siteMapService.navigated.subscribe((event) => {
        this.loadTeam();
      });
  }

  private loadTeam() {
    this._teamId = this.siteMapService.getCurrentYouthTeamId(this.activatedRoute.snapshot);

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

}
