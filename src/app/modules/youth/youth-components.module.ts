import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from '../../modules/app-routing/app-routing.module';
import { MatProgressSpinnerModule, MatSelectModule, MatExpansionModule } from '@angular/material';

import { PersonsRepositoryService } from '../../services/persons-repository.service';
import { TeamsRepositoryService } from '../../services/teams-repository.service';

import { YouthViewComponent } from '../../components/youth/youth-view/youth-view.component';
import { YouthNavigationComponent } from '../../components/youth/youth-navigation/youth-navigation.component';
import { YouthHomeComponent } from '../../components/youth/youth-home/youth-home.component';
import { YouthManagementComponent } from '../../components/youth/youth-management/youth-management.component';
import { YouthTeamsComponent } from '../../components/youth/youth-teams/youth-teams.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { YouthAboutComponent } from '../../components/youth/youth-about/youth-about.component';
import { YouthTeamNavigationComponent } from '../../components/youth/teams/youth-team-navigation/youth-team-navigation.component';
import { YouthTeamComponent } from '../../components/youth/teams/youth-team/youth-team.component';
import { YouthTeamAboutComponent } from '../../components/youth/teams/youth-team-about/youth-team-about.component';
import { YouthTeamGamesComponent } from '../../components/youth/teams/youth-team-games/youth-team-games.component';
import { YouthTeamResultsComponent } from '../../components/youth/teams/youth-team-results/youth-team-results.component';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AppRoutingModule,
    SharedComponentsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatExpansionModule
  ],
  declarations: [
    YouthViewComponent,
    YouthNavigationComponent,
    YouthHomeComponent,
    YouthManagementComponent,
    YouthTeamsComponent,
    YouthAboutComponent,
    YouthTeamNavigationComponent,
    YouthTeamComponent,
    YouthTeamAboutComponent,
    YouthTeamGamesComponent,
    YouthTeamResultsComponent
  ],
  providers: [
    PersonsRepositoryService,
    TeamsRepositoryService
  ],
  exports: [
    YouthViewComponent
  ]
})
export class YouthComponentsModule { }
