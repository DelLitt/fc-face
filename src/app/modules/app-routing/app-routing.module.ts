import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { HomeViewComponent } from '../../components/main/home-view/home-view.component';
import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';
import { ContactsViewComponent } from '../../components/contacts/contacts-view/contacts-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'publications/:id', component: PublicationViewComponent },
  { path: 'contacts', component: ContactsViewComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
