import { Injectable } from '@angular/core';

@Injectable()
export class TextUtilityService {

  constructor() { }

  public insertAt(text: string, index: number, value: string): string {
    return text.substr(0, index) + value + text.substr(index);
  }

  public cropWithEllipsis(text: string, maxLenght: number = 64): string {
    if (!text) { return ''; }
    return text.length < maxLenght ? text : text.substring(0, maxLenght) + '...';
  }

}
