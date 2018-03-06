import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../../../services/log.service';
import { Entity } from '../../../model/entity';
import { SearchService } from '../../../services/search.service';
import { AlertService } from '../../../services/alert.service';

const DefPageSize = 2;

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private _loaded = false;
  private searchText = '';
  private pageIndex = 0;
  private pageSize: number = DefPageSize;
  private pageSizeOptions: number[] = [DefPageSize, 25, 50, 100];
  private entitiesTotalCount = 0;
  private entities: Entity[];

  constructor(
    private alertService: AlertService,
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.setSearchText();
  }

  private setSearchText() {
    this.activatedRoute.params.subscribe(params => {
      this.searchText = params['text'];
      this.logger.logDebug(`'${(<any>this).constructor.name}' has recieved text for searching: '${this.searchText}'.`);
      this.processSearching();
   });
  }

  private processSearching() {
    if (!this.search || this.searchText.length < this.searchService.minSearchTextLength ) {
      this.logger.logWarning(`'${(<any>this).constructor.name}' has recieved too short text for searching: '${this.searchText}'.`);
      this.alertService.alert('ERR_SEARCH_STRING_SHORT');
      return;
    }

    this.search(10, 20);
  }

  private search(count, skip: number = 0) {
    this.logger.logDebug(`'${(<any>this).constructor.name}' has started searching for ${this.searchText}.`);
    this._loaded = false;

    this.searchService.search(this.searchText)
    .then(result => {
      this.entities = result;
      this._loaded = true;
      this.logger.logDebug(`'${(<any>this).constructor.name}' has finished searching successfully.`);
    })
    .catch(reason => {
      this.router.navigate(['/not-found']);
    });
  }

}
