import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
