import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from '../../components/search/search-results/search-results.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchResultsComponent
  ],
  exports: [
    SearchResultsComponent
  ]
})
export class SearchComponentsModule { }
