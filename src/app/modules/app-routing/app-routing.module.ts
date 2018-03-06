import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { HomeViewComponent } from '../../components/main/home-view/home-view.component';
import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';
import { ContactsViewComponent } from '../../components/contacts/contacts-view/contacts-view.component';
import { RoutesConfiguration } from '../../services/configuration/routes-configuration';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(RoutesConfiguration)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
