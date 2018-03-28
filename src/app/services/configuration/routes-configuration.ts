import { Routes } from '@angular/router';
import { SiteMap } from '../../model/app/site-map';
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
import { YouthTeamAboutComponent } from '../../components/youth/teams/youth-team-about/youth-team-about.component';
import { YouthTeamGamesComponent } from '../../components/youth/teams/youth-team-games/youth-team-games.component';
import { YouthTeamResultsComponent } from '../../components/youth/teams/youth-team-results/youth-team-results.component';
import { StandingsViewComponent } from '../../components/results/standings-view/standings-view.component';
import { MatchesViewComponent } from '../../components/results/matches-view/matches-view.component';
import { PlayersStatisticsViewComponent } from '../../components/results/players-statistics-view/players-statistics-view.component';
import { DirectionViewComponent } from '../../components/club/direction-view/direction-view.component';
import { CoachesViewComponent } from '../../components/club/coaches-view/coaches-view.component';
import { MedicsViewComponent } from '../../components/club/medics-view/medics-view.component';
import { SpecialistsViewComponent } from '../../components/club/specialists-view/specialists-view.component';
import { ShortHistoryComponent } from '../../components/history/short-history/short-history.component';

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
        path: 'club/direction',
        component: DirectionViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[2]] }
    },
    {
        path: 'club/coaches',
        component: CoachesViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[2]] }
    },
    {
        path: 'club/medics',
        component: MedicsViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[2]] }
    },
    {
        path: 'club/specialists',
        component: SpecialistsViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[2]] }
    },
    {
        path: 'results/matches',
        component: MatchesViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[3]] }
    },
    {
        path: 'results/standings',
        component: StandingsViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[3]] }
    },
    {
        path: 'results/playersstats',
        component: PlayersStatisticsViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[3]] }
    },
    {
        path: 'youth',
        component: YouthViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[4]] },
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
                        path: 'about',
                        component: YouthTeamAboutComponent
                    },
                    {
                        path: 'games',
                        component: YouthTeamGamesComponent
                    },
                    {
                        path: 'results',
                        component: YouthTeamResultsComponent
                    },
                    { path: '', redirectTo: 'about', pathMatch: 'full' }
                ]
            },
            {
                path : 'about',
                component: YouthAboutComponent
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
         ]
    },
    {
        path: 'info/stadiumrules',
        component: StadiumRulesViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[5]] }
    },
    {
        path: 'history',
        component: ShortHistoryComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[6]] },
        children: [
            {
             path : 'short',
             component: ShortHistoryComponent
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    {
        path: 'contacts',
        component: ContactsViewComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[7]] }
    },
    {
        path: 'search/:text',
        component: SearchResultsComponent,
        data: { routesChain: [SiteMapConfiguration[0], SiteMapConfiguration[8]] }
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
