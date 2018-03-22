export interface PublicationEntity {
    id: number;
    title: string;
    img: string;
    description: string;
    displayDate: Date;
    author: string;
    hasVideo: boolean;
    hasPhoto: boolean;
    classification: string;
}
