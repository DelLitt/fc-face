import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { Person } from '../model/person';
import { PersonRoleGroup } from '../model/person-role-group';

@Injectable()
export class PersonsRepositoryService {

  constructor(
    private dataSource: DataSourceService,
    private logger: LogService
  ) { }

  public getYouthManagement(count: number, skip: number): Promise<Person[]> {
      return new Promise((resolve, reject) => {
        this.logger.logDebug(`'${(<any>this).constructor.name}' started loading youth management.`);

        this.dataSource.getPersons(count, skip, PersonRoleGroup.youthManagement)
          .then(result => {
            if (result) {
              const persons: Person[] = this.convertResponseToPersons(result);
              this.logger.logInfo(`'${(<any>this).constructor.name}' loaded youth management successfully.`);
              resolve(persons);
            } else {
              const errorMsg = `'${(<any>this).constructor.name}' was unable to load  youth management!`;
              this.logger.logError(errorMsg);
              reject(new Error(errorMsg));
            }
          });
      });
  }

  public getDirection(count: number, skip: number): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading direction.`);

      this.dataSource.getPersons(count, skip, PersonRoleGroup.direction)
        .then(result => {
          if (result) {
            const persons: Person[] = this.convertResponseToPersons(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded direction successfully.`);
            resolve(persons);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load direction!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  public getCoaches(count: number, skip: number): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading coaches.`);

      this.dataSource.getPersons(count, skip, PersonRoleGroup.coaches)
        .then(result => {
          if (result) {
            const persons: Person[] = this.convertResponseToPersons(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded coaches successfully.`);
            resolve(persons);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load coaches!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  public getMedics(count: number, skip: number): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading medics.`);

      this.dataSource.getPersons(count, skip, PersonRoleGroup.medics)
        .then(result => {
          if (result) {
            const persons: Person[] = this.convertResponseToPersons(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded medics successfully.`);
            resolve(persons);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load medics!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  public getSpecialists(count: number, skip: number): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading specialists.`);

      this.dataSource.getPersons(count, skip, PersonRoleGroup.specialists)
        .then(result => {
          if (result) {
            const persons: Person[] = this.convertResponseToPersons(result);
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded specialists successfully.`);
            resolve(persons);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' was unable to load specialists!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  private convertResponseToPersons(response: Array<any>): Person[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Person>(); }

    const persons: Person[] = new Array<Person>();
    data.forEach(element => {
      const person = new Person();
      person.id = element.id;
      person.img = element.img;
      person.nameFirst = element.nameFirst;
      person.nameLast = element.nameLast;
      person.role = {
        id: element.role.id,
        title: element.role.title,
        i18nKey: element.role.i18nKey
      };

      persons.push(person);
    });

    return persons;
  }

}
