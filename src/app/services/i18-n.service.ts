import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class I18NService {

  constructor(
    private translate: TranslateService
  ) { }

  public get localeKey(): string {
    return this.translate.currentLang.replace('by', 'be');
  }

}
