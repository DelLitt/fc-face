import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../../services/log.service';
import { AlertService } from '../../../services/alert.service';
import { SearchService } from '../../../services/search.service';


@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {
  private searchText: string;

  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor(
    private alertService: AlertService,
    private searchService: SearchService,
    private router: Router,
    private logger: LogService
  ) { }

  ngOnInit() {
  }

  public doSearch() {
    this.logger.logInfo(`Search is called for "${this.searchText}"!`);

    if (!this.search || this.searchText.length < this.searchService.minSearchTextLength ) {
      this.logger.logWarning(`'${(<any>this).constructor.name}' has recieved too short text for searching: '${this.searchText}'.`);
      this.alertService.alert('ERR_SEARCH_STRING_SHORT');
      return;
    }

    this.search.emit(this.searchText);
    this.router.navigate(['/search', this.searchText]);
  }
}
