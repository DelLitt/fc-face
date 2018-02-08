import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalNavigationComponent } from '../../components/global/global-navigation/global-navigation.component';
import { GlobalHeaderComponent } from '../../components/global/global-header/global-header.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    GlobalNavigationComponent,
    GlobalHeaderComponent
  ],
  exports: [
    GlobalNavigationComponent,
    GlobalHeaderComponent
  ]
})
export class GlobalComponentsModule { }
