import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { GlobalComponentsModule } from './modules/global/global-components.module';
import { MainComponentsModule } from './modules/main/main-components.module';
import { PublicationComponentsModule } from '././modules/publications/publication-components.module';
import { StaticPagesModule } from '././modules/static/static-pages.module';
import { SearchComponentsModule } from './modules/search/search-components.module';
import { YouthComponentsModule } from './modules/youth/youth-components.module';
import { ResultsModule } from './modules/results/results.module';
import { ClubComponentsModule } from './modules/club/club-components.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatSnackBarModule } from '@angular/material';
import { AlertService } from './services/alert.service';
import { I18NService } from './services/i18-n.service';

import localeEn from '@angular/common/locales/en';
import localeRu from '@angular/common/locales/ru';
import localeBe from '@angular/common/locales/be';
import { ConfigurationService } from './services/configuration/configuration.service';
import { CilentConfigurationService } from './services/configuration/cilent-configuration-service.service';
import { HistoryModule } from './modules/history/history.module';

(function registerLocales() {
  // the second parameter is optional
  registerLocaleData(localeEn, 'en');
  registerLocaleData(localeRu, 'ru');
  registerLocaleData(localeBe, 'be');
})();


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
    }),
    MatSnackBarModule,
    AppRoutingModule,
    GlobalComponentsModule,
    MainComponentsModule,
    PublicationComponentsModule,
    YouthComponentsModule,
    SearchComponentsModule,
    StaticPagesModule,
    ResultsModule,
    ClubComponentsModule,
    HistoryModule
  ],
  providers: [
    AlertService,
    I18NService,
    { provide: ConfigurationService, useClass: CilentConfigurationService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
