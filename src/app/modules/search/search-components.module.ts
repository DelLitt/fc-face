import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from '../../components/search/search-results/search-results.component';
import { SearchService } from '../../services/search.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { SharedComponentsModule } from '../shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
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
