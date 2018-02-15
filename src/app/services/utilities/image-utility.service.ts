import { Injectable } from '@angular/core';
import { TextUtilityService } from './text-utility.service';

@Injectable()
export class ImageUtilityService {

  constructor(private textUtility: TextUtilityService) { }

  public addFileVariantSize(path: string, width: number, height: number): string {
    return this.addFileVariantKey(path, `${width}x${height}`);
  }

  public addFileVariantKey(path: string, variant: string): string {
    return path;

    // TODO: Uncomment after integration with back end
    //
    // const dotIndex = path.lastIndexOf('.');
    // if (dotIndex < 1) { return path; }

    // const variantKey = '.variants' + variant;
    // return this.textUtility.insertAt(path, dotIndex, variantKey);
  }
}
