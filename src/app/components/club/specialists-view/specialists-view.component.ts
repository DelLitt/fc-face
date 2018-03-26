import { Component, OnInit } from '@angular/core';
import { PersonsRepositoryService } from '../../../services/persons-repository.service';
import { LogService } from '../../../services/log.service';
import { Person } from '../../../model/person';

@Component({
  selector: 'app-specialists-view',
  templateUrl: './specialists-view.component.html',
  styleUrls: ['./specialists-view.component.scss']
})
export class SpecialistsViewComponent implements OnInit {
  private _loaded = false;
  private persons: Person[];

  constructor(
    private personsRepository: PersonsRepositoryService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadPersons(20);
  }

  private loadPersons(count, skip: number = 0) {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to load specialists.`);
    this._loaded = false;

    this.personsRepository.getSpecialists(count, skip)
    .then(result => {
      this.persons = result;
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the specialists (count: ${this.persons.length}) successfully.`);
    });
  }

}
