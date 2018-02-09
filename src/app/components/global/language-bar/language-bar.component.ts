import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

  @Output() languageChanged: EventEmitter<any> = new EventEmitter();

  constructor(private translate: TranslateService, private logger: LogService) { }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.logger.logInfo(`Language was switched to "${language}".`);
    this.translate.use(language);
    this.languageChanged.emit(language);
  }
}
