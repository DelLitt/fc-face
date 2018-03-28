import { SiteMap } from '../../model/app/site-map';

export const SiteMapConfiguration: SiteMap = [
    { defaultName: 'Home', i18nKey: 'HOME_PAGE', path: 'home', visible: true, clickable: true },
    { defaultName: 'News', i18nKey: 'NEWS', path: 'publications', visible: true, clickable: true },
    {
        defaultName: 'Club', i18nKey: 'CLUB', path: 'club', visible: true, clickable: false,
        subItems: [
            { defaultName: 'Main team', i18nKey: 'MAIN_TEAM', path: 'club/mainteam', visible: true, clickable: true, disabled: true },
            // tslint:disable-next-line:max-line-length
            { defaultName: 'Reserve team', i18nKey: 'RESERVE_TEAM', path: 'club/reserveteam', visible: true, clickable: true, disabled: true },
            { defaultName: 'Direction', i18nKey: 'DIRECTION', path: 'club/direction', visible: true, clickable: true, underSeparator: true },
            { defaultName: 'Coaching staff', i18nKey: 'COACHING_STAFF', path: 'club/coaches', visible: true, clickable: true },
            { defaultName: 'Medical staff', i18nKey: 'MEDICAL_STAFF', path: 'club/medics', visible: true, clickable: true },
            { defaultName: 'Specialists', i18nKey: 'SPECIALISTS_STAFF', path: 'club/specialists', visible: true, clickable: true }
        ]
    },
    {
        defaultName: 'Results', i18nKey: 'RESULTS', path: 'results', visible: true, clickable: false,
        subItems: [
            { defaultName: 'Matches', i18nKey: 'MATCHES', path: 'results/matches', visible: true, clickable: true },
            { defaultName: 'Standings', i18nKey: 'STANDINGS', path: 'results/standings', visible: true, clickable: true },
            // tslint:disable-next-line:max-line-length
            { defaultName: 'Players Statistics', i18nKey: 'PLAYERS_STATISTICS', path: 'results/playersstats', visible: true, clickable: true }
        ]
    },
    {
        defaultName: 'Sports School', i18nKey: 'Y_S_S', path: 'youth', visible: true, clickable: true,
        subItems: [
            { defaultName: 'Home', i18nKey: 'HOME_PAGE', path: 'youth/home', visible: false, clickable: true },
            // tslint:disable-next-line:max-line-length
            { defaultName: 'Management and coaches', i18nKey: 'MANAGEMENT_AND_COACHES', path: 'youth/coaches', visible: false, clickable: true },
            { defaultName: 'Youth teams', i18nKey: 'YOUTH_TEAMS', path: 'youth/teams', visible: false, clickable: true },
            { defaultName: 'Information', i18nKey: 'INFORMATION', path: 'youth/about', visible: false, clickable: true }
        ]
    },
    {
        defaultName: 'Information', i18nKey: 'INFORMATION', path: 'info', visible: true, clickable: false,
        subItems: [
            { defaultName: 'Stadium rules', i18nKey: 'STADIUM_RULES', path: 'info/stadiumrules', visible: true, clickable: true }
        ]
    },
    {
        defaultName: 'History', i18nKey: 'HISTORY', path: 'history', visible: true, clickable: true,
        subItems: [
            { defaultName: 'Brief history', i18nKey: 'HISTORY_SHORT', path: 'history/short', visible: true, clickable: true },
            // tslint:disable-next-line:max-line-length
            { defaultName: 'Detailed History', i18nKey: 'HISTORY_FULL', path: 'history/full', visible: true, clickable: true, disabled: true }
        ]
    },
    { defaultName: 'Contacts', i18nKey: 'CONTACTS', path: 'contacts', visible: true, clickable: true },
    { defaultName: 'Search', i18nKey: 'SEARCH', path: 'search', visible: false, clickable: false }
];
