import { Routes } from '@angular/router';
import { SiteMap } from '../../model/site-map';

import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { ContactsViewComponent } from '../../components/contacts/contacts-view/contacts-view.component';
import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';
import { HomeViewComponent } from '../../components/main/home-view/home-view.component';
import { PublicationsListComponent } from '../../components/publications/publications-list/publications-list.component';
import { SiteMapConfiguration } from './site-map-configuration';
import { SearchResultsComponent } from '../../components/search/search-results/search-results.component';

export const RoutesConfiguration: Routes = [
    {
        path: 'home',
        component: HomeViewComponent
    },
    {
        path: 'publications',
        component: PublicationsListComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[1]] }
    },
    {
        path: 'publications/:id',
        component: PublicationViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[1]], useTitle: true }
    },
    {
        path: 'search',
        component: SearchResultsComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[3]] }
    },
    {
        path: 'contacts',
        component: ContactsViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[4]] }
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
