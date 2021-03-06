import { Injectable, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Routes, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { SiteMap } from '../model/app/site-map';
import { SiteMapConfiguration } from './configuration/site-map-configuration';
import { LogService } from './log.service';
import { YouthTeamPageActivation } from '../model/app/youth-team-page-activation';
import { ConfigurationService } from './configuration/configuration.service';


@Injectable()
export class SiteMapService {

  private _pageTitle: string;
  private _breadcrumbTitle: string;
  private _breadcrumbChain: SiteMap;
  private _youthTeamPageActivation: YouthTeamPageActivation;

  @Output() navigated: EventEmitter<any> = new EventEmitter();

  constructor(
    private configuration: ConfigurationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private logger: LogService
  ) {
    this._youthTeamPageActivation = new YouthTeamPageActivation(logger);
    this.listenNavigation();
  }

  public get items(): SiteMap {
    return SiteMapConfiguration;
  }

  public get breadcrumbTitle(): string {
    return this._breadcrumbTitle;
  }

  public set breadcrumbTitle(value) {
    this._breadcrumbTitle = value;
  }

  public get breadcrumbChain(): SiteMap {
    return this._breadcrumbChain;
  }

  public get pageTitle(): string {
    return this._pageTitle;
  }

  public set pageTitle(value) {
    this._pageTitle = value;
  }

  public get youthTeamPageActivation(): YouthTeamPageActivation {
    return this._youthTeamPageActivation;
  }

  public getCurrentYouthTeamId(activatedRouteSnapshot: ActivatedRouteSnapshot): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const youthTeamKey = (activatedRouteSnapshot.params['key'] || '').toUpperCase();
      this.configuration.youthTeamsMap.then(result => {
      if (!result.has(youthTeamKey)) { resolve(null); }

        return resolve(result.get(youthTeamKey));
      });
    });
  }

  private listenNavigation() {
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}'. Finished navigation to '${(event as NavigationEnd).url}'`);
      this.buildBreadCrumb(this.activatedRoute);
      this.setActiveYouthTeamPage(event);
      this.navigated.emit(event);
    });
  }

  private buildBreadCrumb(event) {
    this._breadcrumbChain = event.snapshot.firstChild.data['routesChain'];
    this._breadcrumbTitle = '';
  }

  private setActiveYouthTeamPage(event) {
    this._youthTeamPageActivation.setActive('about');

    if (event.url.startsWith('/youth/teams/')) {
      // if (event.url.endsWith('/about')) {
      //   this._youthTeamPageActivation.setActive('about');
      // } else
      if (event.url.endsWith('/games')) {
        this._youthTeamPageActivation.setActive('games');
      } else if (event.url.endsWith('/results')) {
        this._youthTeamPageActivation.setActive('results');
      }
    }
  }
}
