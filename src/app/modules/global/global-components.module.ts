import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalNavigationComponent } from '../../components/global/global-navigation/global-navigation.component';
import { GlobalHeaderComponent } from '../../components/global/global-header/global-header.component';
import { GlobalBreadcrumbComponent } from '../../components/global/global-breadcrumb/global-breadcrumb/global-breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    GlobalNavigationComponent,
    GlobalHeaderComponent,
    GlobalBreadcrumbComponent
  ],
  exports: [
    GlobalNavigationComponent,
    GlobalHeaderComponent,
    GlobalBreadcrumbComponent
  ]
})
export class GlobalComponentsModule { }
