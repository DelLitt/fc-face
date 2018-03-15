import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { Video } from '../model/video';
import { PublicationVisibility } from '../model/publication-visibility';

@Injectable()
export class VideosRepositoryService {

  constructor(
    private dataSource: DataSourceService,
    private logger: LogService
  ) { }

  public getVideo(id: number): Promise<Video> {
    return new Promise((resolve, reject) => {
      this.logger.logDebug(`'${(<any>this).constructor.name}' started loading the video (id:${id}).`);

      this.dataSource.getEntity(id, 'videos')
        .then(result => {
          if (result) {
            this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the video (id:${id}) successfully.`);
            const video: Video = this.convertResponseToVideo(result);
            resolve(video);
          } else {
            const errorMsg = `'${(<any>this).constructor.name}' not found the video (id:${id})!`;
            this.logger.logError(errorMsg);
            reject(new Error(errorMsg));
          }
        });
    });
  }

  public getAllVideos(count: number, skip: number = 0): Promise<Video[]> {
    const visibility = [
      PublicationVisibility.main,
      PublicationVisibility.news,
      PublicationVisibility.reserve,
      PublicationVisibility.youth
    ];

    return this.getVideos(count, skip, visibility);
  }

  public getYouthVideos(count: number, skip: number = 0): Promise<Video[]> {
    const visibility = [
      PublicationVisibility.youth
    ];

    return this.getVideos(count, skip, visibility);
  }

  private getVideos(
    count: number,
    skip: number,
    visibility: PublicationVisibility[]
  ): Promise<Video[]> {
      return new Promise((resolve, reject) => {
        this.logger.logDebug(`'${(<any>this).constructor.name}' started loading videos.`);

        this.dataSource.getEntities(count, skip, 'videos', visibility)
          .then(result => {
            if (result) {
              const videos: Video[] = this.convertResponseToVideos(result);
              this.logger.logInfo(`'${(<any>this).constructor.name}' loaded videos successfully.`);
              resolve(videos);
            } else {
              const errorMsg = `'${(<any>this).constructor.name}' was unable to load videos!`;
              this.logger.logError(errorMsg);
              reject(new Error(errorMsg));
            }
          });
      });
  }

  private convertResponseToVideos(response: Array<any>): Video[] {
    const data: Array<any> = response || [];
    if (data.length === 0) { return new Array<Video>(); }

    const videos: Video[] = new Array<Video>();
    data.forEach(element => {
      const video = new Video();
      video.id = element.id;
      video.header = element.header;
      video.img = element.img;
      video.description = element.lead;
      video.title = element.title;
      video.htmlCode = element.htmlCode;
      video.displayDate = new Date(element.displayDate);
      video.sortDate = new Date(element.sortDate);

      videos.push(video);
    });

    return videos;
  }

  private convertResponseToVideo(response: any): Video {
    if (!response) { return null; }

    const video = new Video();
    video.author = response.author;
    video.displayDate = new Date(response.displayDate);
    video.header = response.header;
    video.htmlCode = response.htmlCode;
    video.id = response.id;
    video.img = response.img;
    video.description = response.lead;
    video.sortDate = new Date(response.sortDate);
    video.title = response.title;

    return video;
  }
}
