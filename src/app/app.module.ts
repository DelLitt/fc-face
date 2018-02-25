import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


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
  AppRoutingModule,
  GlobalComponentsModule,
  MainComponentsModule,
  PublicationComponentsModule,
  StaticPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
