import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from '../../components/search/search-results/search-results.component';
import { SearchService } from '../../services/search.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule, MatPaginatorModule } from '@angular/material';
import { SharedComponentsModule } from '../shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    TranslateModule,
    SharedComponentsModule
  ],
  declarations: [
    SearchResultsComponent
  ],
  providers: [
    SearchService
  ],
  exports: [
    SearchResultsComponent
  ]
})
export class SearchComponentsModule { }
