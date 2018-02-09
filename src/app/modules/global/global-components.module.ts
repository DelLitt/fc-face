import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalNavigationComponent } from '../../components/global/global-navigation/global-navigation.component';
import { GlobalHeaderComponent } from '../../components/global/global-header/global-header.component';
import { GlobalBreadcrumbComponent } from '../../components/global/global-breadcrumb/global-breadcrumb/global-breadcrumb.component';
import { GlobalSearchComponent } from '../../components/global/global-search/global-search.component';
import { LanguageBarComponent } from '../../components/global/language-bar/language-bar.component';
import { LogService, LogLevel } from '../../services/log.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    GlobalNavigationComponent,
    GlobalHeaderComponent,
    GlobalBreadcrumbComponent,
    GlobalSearchComponent,
    LanguageBarComponent
  ],
  providers: [
    {provide: LogLevel, useValue: LogLevel.DEBUG},
    {
      provide: LogService,
    deps: [LogLevel],
    useFactory: (level) => {
      const logger = new LogService();
      logger.minLevel = LogLevel.DEBUG;
      return logger;
    }
  }],
  exports: [
    GlobalNavigationComponent,
    GlobalHeaderComponent,
    GlobalBreadcrumbComponent,
    GlobalSearchComponent
  ]
})
export class GlobalComponentsModule { }
