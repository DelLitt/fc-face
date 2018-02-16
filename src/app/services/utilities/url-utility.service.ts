import { Injectable } from '@angular/core';

@Injectable()
export class UrlUtilityService {

  constructor() { }

  public ToAbsolute(relativeUrl: string): string {
    const a = document.createElement('a');
    a.href = relativeUrl;
    return a.href;
  }

}
