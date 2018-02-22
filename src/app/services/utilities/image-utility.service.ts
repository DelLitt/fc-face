import { Injectable } from '@angular/core';
import { TextUtilityService } from './text-utility.service';
import { LogService } from '../log.service';
import { StringCacheUtilityService } from './string-cache-utility.service';

export const EMPTY_IMAGE_PATH = '/assets/img/_tmp/empty-img.png';

@Injectable()
export class ImageUtilityService {

  constructor(
    private textUtility: TextUtilityService,
    private cacheUtility: StringCacheUtilityService,
    private logger: LogService
  ) { }

  public getImageAnyway(path: string, width: number = 0, height: number = 0) {
    const anywayPath: string =
      this.cacheUtility.getOrSet(
        () => this.getImageAnywayDirectly(path, width, height),
        path,
        width.toString(),
        height.toString());

    return anywayPath;
  }

  private getImageAnywayDirectly(path: string, width: number = 0, height: number = 0) {
    if (!path || path.length === 0) {
      const alternatePath = this.getEmptyImage(width, height);
      this.logger.logDebug(`'${(<any>this).constructor.name}' changed empty image path to alternate '${alternatePath}'`);

      return alternatePath;
    }

    if (width === 0 || height === 0) { return path; }

    return this.addFileVariantSize(path, width, height);
  }

  public getEmptyImage(width: number, height: number): string {
    return this.addFileVariantSize(EMPTY_IMAGE_PATH, width, height);
  }

  public addFileVariantSize(path: string, width: number, height: number): string {
    return this.addFileVariantKey(path, `${width}x${height}`);
  }

  public addFileVariantKey(path: string, variant: string): string {
    const variantPath: string =
      this.cacheUtility.getOrSet(
        () => this.applyVariantToPath(path, variant),
        path,
        variant);

    return variantPath;
  }

  private applyVariantToPath(path: string, variant: string): string {
    this.logger.logDebug(`'${(<any>this).constructor.name}' applied variant ${variant} to image ${path}. Result: 'disabled'.`);
    return path;

    // TODO: Uncomment after integration with back end
    //
    // const dotIndex = path.lastIndexOf('.');
    // if (dotIndex < 1) { return path; }

    // const variantKey = '.variants' + variant;
    // return this.textUtility.insertAt(path, dotIndex, variantKey);
  }
}
