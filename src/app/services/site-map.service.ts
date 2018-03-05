import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, Routes, NavigationEnd } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ContactsViewComponent } from '../components/contacts/contacts-view/contacts-view.component';
import { PublicationViewComponent } from '../components/publications/publication-view/publication-view.component';
import { HomeViewComponent } from '../components/main/home-view/home-view.component';
import { SiteMap } from '../model/site-map';
import { LogService } from './log.service';
import { PublicationsListComponent } from '../components/publications/publications-list/publications-list.component';


const SiteMapConfiguration: SiteMap = [
  { defaultName: 'Home', i18nKey: 'HOME_PAGE', path: 'home', visible: true, clickable: true },
  { defaultName: 'News', i18nKey: 'NEWS', path: 'publications', visible: true, clickable: true },
  { defaultName: 'Club', i18nKey: 'CLUB', path: 'club', visible: true, clickable: false,
      subItems: [
          { defaultName: 'Main team', i18nKey: 'MAIN_TEAM', path: 'club/mainteam', visible: true, clickable: true },
          { defaultName: 'Reserve team', i18nKey: 'RESERVE_TEAM', path: 'club/reserveteam', visible: true, clickable: true }
      ]
  },
  { defaultName: 'Contacts', i18nKey: 'CONTACTS', path: 'contacts', visible: true, clickable: true }
];

export const RoutesConfiguration: Routes = [
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'publications',
    component: PublicationsListComponent,
    data: { routesChain: [ SiteMapConfiguration[0] ], useTitle: false }
  },
  {
    path: 'publications/:id',
    component: PublicationViewComponent,
    data: { routesChain: [ SiteMapConfiguration[0], SiteMapConfiguration[1] ], useTitle: true }
  },
  {
    path: 'contacts',
    component: ContactsViewComponent,
    data: { routesChain: [ SiteMapConfiguration[0], SiteMapConfiguration[3] ], useTitle: false }
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

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
