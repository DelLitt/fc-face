import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LogService } from '../../services/log.service';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Injectable()
export class CanActivateYouthTeam implements CanActivate {
  constructor(
    private configuration: ConfigurationService,
    private router: Router,
    private logger: LogService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return new Promise<boolean>((resolve, reject) => {
      this.configuration.youthTeamsMap.then(result => {
        if (!result.has(route.params.key.toUpperCase())) {
          this.logger.logWarning(`'${(<any>this).constructor.name}'. The page of youth team '${route.params.key}' can not be navigated!`);
          this.router.navigate(['/not-found']);
          resolve(false);
        }

        resolve(true);
      });
    });
  }
}
