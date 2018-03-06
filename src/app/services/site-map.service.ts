import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, Routes, NavigationEnd } from '@angular/router';
import { SiteMap } from '../model/site-map';
import { SiteMapConfiguration } from './configuration/site-map-configuration';
import { LogService } from './log.service';


@Injectable()
export class SiteMapService {

  private _pageTitle: string;
  private _breadcrumbTitle: string;
  private _breadcrumbChain: SiteMap;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private logger: LogService
  ) {
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

  private listenNavigation() {
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event) => this.buildBreadCrumb(this.activatedRoute));
  }

  private buildBreadCrumb(event) {
    this._breadcrumbChain = event.snapshot.firstChild.data['routesChain'];
    this._breadcrumbTitle = '';
  }
}
