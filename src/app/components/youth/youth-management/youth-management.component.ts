import { Component, OnInit } from '@angular/core';
import { PersonsRepositoryService } from '../../../services/persons-repository.service';
import { LogService } from '../../../services/log.service';
import { Person } from '../../../model/person';
import { TeamsRepositoryService } from '../../../services/teams-repository.service';
import { Team } from '../../../model/team';

@Component({
  selector: 'app-youth-management',
  templateUrl: './youth-management.component.html',
  styleUrls: ['./youth-management.component.scss']
})
export class YouthManagementComponent implements OnInit {

  private _loaded = false;
  private persons: Person[];

  constructor(
    private personsRepository: PersonsRepositoryService,
    private teamsRepositoryService: TeamsRepositoryService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadPersons(10);
  }

  private loadPersons(count, skip: number = 0) {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to load the youth management.`);
    this._loaded = false;

    this.personsRepository.getYouthManagement(count, skip)
    .then(result => {
      this.persons = result;
      this.loadPersonsTeams();
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the youth management (count: ${this.persons.length}) successfully.`);
    });
    // .catch(reason => {
    //   this.router.navigate(['/not-found']);
    // });
  }

  private loadPersonsTeams() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to load the youth management.`);
    this._loaded = false;

    this.teamsRepositoryService.getCoachTeams(this.persons.map(p => p.id))
    .then(result => {
      const teams: Team[] = result;
      this.persons.forEach(element => {
        element.teams = teams.filter(t => t.coachId === element.id);
      });
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the youth management (count: ${this.persons.length}) successfully.`);
    });
    // .catch(reason => {
    //   this.router.navigate(['/not-found']);
    // });
  }

}
