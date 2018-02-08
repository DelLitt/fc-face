import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalNavigationComponent } from '../../components/global/global-navigation/global-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    GlobalNavigationComponent
  ],
  exports: [
    GlobalNavigationComponent
  ]
})
export class GlobalComponentsModule { }
