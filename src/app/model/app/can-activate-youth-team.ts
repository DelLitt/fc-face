import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LogService } from '../../services/log.service';
import { YoutTeamsMappingTable } from './youth-teams-mapping-table';

@Injectable()
export class CanActivateYouthTeam implements CanActivate {
  constructor(
    private router: Router,
    private logger: LogService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    if (!YoutTeamsMappingTable.has(route.params.key.toUpperCase())) {
        this.logger.logWarning(`'${(<any>this).constructor.name}'. The page of youth team '${route.params.key}' can not be navigated!`);
        this.router.navigate(['/not-found']);
        return false;
    }

    return true;
  }
}
