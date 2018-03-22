import { SiteMap } from '../../model/app/site-map';

export const SiteMapConfiguration: SiteMap = [
    { defaultName: 'Home', i18nKey: 'HOME_PAGE', path: 'home', visible: true, clickable: true },
    { defaultName: 'News', i18nKey: 'NEWS', path: 'publications', visible: true, clickable: true },
    {
        defaultName: 'Club', i18nKey: 'CLUB', path: 'club', visible: true, clickable: false,
        subItems: [
            { defaultName: 'Main team', i18nKey: 'MAIN_TEAM', path: 'club/mainteam', visible: true, clickable: true },
            { defaultName: 'Reserve team', i18nKey: 'RESERVE_TEAM', path: 'club/reserveteam', visible: true, clickable: true }
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
    { defaultName: 'Contacts', i18nKey: 'CONTACTS', path: 'contacts', visible: true, clickable: true },
    { defaultName: 'Search', i18nKey: 'SEARCH', path: 'search', visible: false, clickable: false }
];
