import { Injectable } from '@angular/core';
import { DataSourceService } from './data-source.service';
import { LogService } from './log.service';
import { Video } from '../model/video';

@Injectable()
export class VideosRepositoryService {

  constructor(
    private dataSource: DataSourceService,
    private logger: LogService) { }

    public getVideo(id: number): Promise<Video> {
      return new Promise((resolve, reject) => {
        this.logger.logDebug(`'${(<any>this).constructor.name}' started loading the video (id:${id}).`);

        this.dataSource.getVideo(id)
          .then(result => {
            if (result) {
              this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the video (id:${id}) successfully.`);
              const video: Video = this.ConvertResponseToVideo(result);
              resolve(video);
            } else {
              const errorMsg = `'${(<any>this).constructor.name}' not found the video (id:${id})!`;
              this.logger.logError(errorMsg);
              reject(new Error(errorMsg));
            }
          });
      });
    }

    private ConvertResponseToVideo(response: any): Video {
      if (!response) { return null; }

      const video = new Video();
      video.author = response.author;
      video.displayDate = new Date(response.displayDate);
      video.header = response.header;
      video.htmlCode = response.htmlCode;
      video.id = response.id;
      video.img = response.img;
      video.lead = response.lead;
      video.sortDate = new Date(response.sortDate);
      video.title = response.title;

      return video;
    }
}
