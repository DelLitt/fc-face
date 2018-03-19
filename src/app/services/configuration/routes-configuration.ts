import { Routes } from '@angular/router';
import { SiteMap } from '../../model/site-map';
import { CanActivateYouthTeam } from '../../model/app/can-activate-youth-team';

import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { ContactsViewComponent } from '../../components/contacts/contacts-view/contacts-view.component';
import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';
import { HomeViewComponent } from '../../components/main/home-view/home-view.component';
import { PublicationsListComponent } from '../../components/publications/publications-list/publications-list.component';
import { SiteMapConfiguration } from './site-map-configuration';
import { SearchResultsComponent } from '../../components/search/search-results/search-results.component';
import { StadiumRulesViewComponent } from '../../components/static/stadium-rules-view/stadium-rules-view.component';
import { YouthViewComponent } from '../../components/youth/youth-view/youth-view.component';
import { YouthHomeComponent } from '../../components/youth/youth-home/youth-home.component';
import { YouthManagementComponent } from '../../components/youth/youth-management/youth-management.component';
import { YouthTeamsComponent } from '../../components/youth/youth-teams/youth-teams.component';
import { YouthAboutComponent } from '../../components/youth/youth-about/youth-about.component';
import { YouthTeamComponent } from '../../components/youth/teams/youth-team/youth-team.component';

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
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[3]] },
        children: [
            {
             path : 'home',
             component: YouthHomeComponent
            },
            {
             path : 'management',
             component: YouthManagementComponent
            },
            {
                path : 'teams/:key',
                component: YouthTeamsComponent,
                canActivate: [CanActivateYouthTeam],
                children: [
                    {
                     path : 'home',
                     component: YouthTeamComponent
                    }
                ]
            },
            {
                path : 'about',
                component: YouthAboutComponent
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
         ]
    },
    {
        path: 'info/stadiumrules',
        component: StadiumRulesViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[4]] }
    },
    {
        path: 'contacts',
        component: ContactsViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[5]] }
    },
    {
        path: 'search/:text',
        component: SearchResultsComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[6]] }
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
