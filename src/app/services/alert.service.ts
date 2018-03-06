import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { debug } from 'util';

@Injectable()
export class AlertService {

  constructor(
    private translate: TranslateService,
    public snackBar: MatSnackBar
  ) { }

  public alert(i18nKey: string, defaultMessage: string = '') {
    if (!i18nKey) {
      return defaultMessage;
    }

    this.translate.get([i18nKey, 'OK']).subscribe(translation => {
      const message: string = translation[i18nKey];
      const action: string = translation['OK'];

      this.snackBar.open(message, action, {
        duration: 2000
      });
    });


  }
}


