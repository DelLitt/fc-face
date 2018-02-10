import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { HomeViewComponent } from '../../components/main/home-view/home-view.component';
import { PublicationViewComponent } from '../../components/publications/publication-view/publication-view.component';

const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'publication/:id', component: PublicationViewComponent },
  { path: '', component: HomeViewComponent },
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
