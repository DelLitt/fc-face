import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { GlobalComponentsModule } from './modules/global/global-components.module';
import { MainComponentsModule } from './modules/main/main-components.module';


import { AppComponent } from './app.component';
import { HomeViewComponent } from './components/main/home-view/home-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
  }),
  AppRoutingModule,
  GlobalComponentsModule,
  MainComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
