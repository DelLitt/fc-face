import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { TeamsRepositoryService } from '../../../services/teams-repository.service';
import { Team } from '../../../model/teams/team';

@Component({
  selector: 'app-teams-select',
  templateUrl: './teams-select.component.html',
  styleUrls: ['./teams-select.component.scss']
})
export class TeamsSelectComponent implements OnInit {
  private _loaded: boolean;
  private _teamIds = Array<number>();
  private _selectedTeamId = 0;
  private _selectedTeam: Team;
  private _teams = new Array<Team>();

  @Output() selectedTeamIdChange = new EventEmitter();
  @Output() teamChange = new EventEmitter();

  constructor(
    private teamsRepository: TeamsRepositoryService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

  @Input() public set teamIds(value: number[]) {
    this._teamIds = value instanceof Array ? value : Array<number>();
    this.init();
  }

  public get selectedTeamId(): number {
    return this._selectedTeamId;
  }

  @Input() public set selectedTeamId(value: number) {
    this._selectedTeamId = value;
    this.raiseTeamChangedEvent();
  }

  public get selectedTeam(): Team {
    this.setSelectedTeam();
    return this._selectedTeam;
  }

  private init() {
    this.teamsRepository.getActiveTeams()
    .then(result => {
      this._teams = result instanceof Array ? result : Array<Team>();

      if (!this.selectedTeamId && this._teams instanceof Array && this._teams.length > 0) {
        this.selectedTeamId = this._teams[0].id;
      }

      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' has loaded active teams (${this._teams.length}) successfully.`);
    });
  }

  private setSelectedTeam() {
    if (!(this._teams instanceof Array)) { return; }

    if (!(this._selectedTeam instanceof Team) || this._selectedTeam.id === this.selectedTeamId) {
      this._selectedTeam = this._teams.find(t => t.id === this.selectedTeamId);
    }
  }

  private changeSelected($event) {
    this.selectedTeamId = $event.value;
  }

  private raiseTeamChangedEvent() {
    this.selectedTeamIdChange.emit(this._selectedTeamId);
    if (this.selectedTeam instanceof Team) {
      this.teamChange.emit(this.selectedTeam);
    }
  }

}
