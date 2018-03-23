export interface SiteMapItem {
    defaultName: string;
    i18nKey: string;
    path: string;
    visible?: boolean;
    clickable?: boolean;
    subItems?: SiteMapItem[];
}

export declare type SiteMap = SiteMapItem[];