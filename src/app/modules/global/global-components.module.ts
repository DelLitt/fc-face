import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalNavigationComponent } from '../../components/global/global-navigation/global-navigation.component';
import { GlobalHeaderComponent } from '../../components/global/global-header/global-header.component';
import { GlobalBreadcrumbComponent } from '../../components/global/global-breadcrumb/global-breadcrumb/global-breadcrumb.component';
import { GlobalSearchComponent } from '../../components/global/global-search/global-search.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    GlobalNavigationComponent,
    GlobalHeaderComponent,
    GlobalBreadcrumbComponent,
    GlobalSearchComponent
  ],
  exports: [
    GlobalNavigationComponent,
    GlobalHeaderComponent,
    GlobalBreadcrumbComponent,
    GlobalSearchComponent
  ]
})
export class GlobalComponentsModule { }
