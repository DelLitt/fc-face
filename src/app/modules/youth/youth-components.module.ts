import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from '../../modules/app-routing/app-routing.module';

import { YouthViewComponent } from '../../components/youth/youth-view/youth-view.component';
import { YouthNavigationComponent } from '../../components/youth/youth-navigation/youth-navigation.component';
import { YouthHomeComponent } from '../../components/youth/youth-home/youth-home.component';
import { YouthManagementComponent } from '../../components/youth/youth-management/youth-management.component';
import { YouthTeamsComponent } from '../../components/youth/youth-teams/youth-teams.component';
import { SharedComponentsModule } from '../shared/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AppRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    YouthViewComponent,
    YouthNavigationComponent,
    YouthHomeComponent,
    YouthManagementComponent,
    YouthTeamsComponent
  ],
  exports: [
    YouthViewComponent
  ]
})
export class YouthComponentsModule { }
