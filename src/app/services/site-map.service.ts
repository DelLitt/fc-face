import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ContactsViewComponent } from '../components/contacts/contacts-view/contacts-view.component';
import { PublicationViewComponent } from '../components/publications/publication-view/publication-view.component';
import { HomeViewComponent } from '../components/main/home-view/home-view.component';
import { SiteMap } from '../model/site-map';


export const RoutesConfiguration: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'publications/:id', component: PublicationViewComponent },
  { path: 'contacts', component: ContactsViewComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

const SiteMapConfiguration: SiteMap = [
  { defaultName: 'Home', i18nKey: 'HOME_PAGE', path: 'home', visible: true, clickable: true },
  { defaultName: 'Club', i18nKey: 'CLUB', path: 'club', visible: true, clickable: false,
      subItems: [
          { defaultName: 'Main team', i18nKey: 'MAIN_TEAM', path: 'club/mainteam', visible: true, clickable: true },
          { defaultName: 'Reserve team', i18nKey: 'RESERVE_TEAM', path: 'club/reserveteam', visible: true, clickable: true }
      ]
  },
  { defaultName: 'Contacts', i18nKey: 'CONTACTS', path: 'contacts', visible: true, clickable: true }
];

@Injectable()
export class SiteMapService {

  constructor() { }

  public get items(): SiteMap {
    return SiteMapConfiguration;
  }

}
