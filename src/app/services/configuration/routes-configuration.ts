import { Routes } from '@angular/router';
import { SiteMap } from '../../model/site-map';

import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { ContactsViewComponent } from '../../components/contacts/contacts-view/contacts-view.component';
import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';
import { HomeViewComponent } from '../../components/main/home-view/home-view.component';
import { PublicationsListComponent } from '../../components/publications/publications-list/publications-list.component';
import { SiteMapConfiguration } from './site-map-configuration';
import { SearchResultsComponent } from '../../components/search/search-results/search-results.component';
import { StadiumRulesViewComponent } from '../../components/static/stadium-rules-view/stadium-rules-view.component';
import { YouthViewComponent } from '../../components/youth/youth-view/youth-view.component';

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
        path: 'youth',
        component: YouthViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[1]] },
        children: [
            {
             path : 'one',
             component: PublicationsListComponent
            },
            {
             path : 'two',
             component: ContactsViewComponent
            }
         ]
    },
    {
        path: 'info/stadiumrules',
        component: StadiumRulesViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[3]] }
    },
    {
        path: 'contacts',
        component: ContactsViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[4]] }
    },
    {
        path: 'search/:text',
        component: SearchResultsComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[4]] }
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
