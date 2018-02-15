import { Injectable } from '@angular/core';

@Injectable()
export class TextUtilityService {

  constructor() { }

  public insertAt(text: string, index: number, value: string): string {
    return text.substr(0, index) + value + text.substr(index);
  }

}
