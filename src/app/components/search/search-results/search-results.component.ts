import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private searchText = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.setSearchText();
  }

  private setSearchText() {
    this.activatedRoute.params.subscribe(params => {
      this.searchText = params['text'];
      this.logger.logInfo(`'${(<any>this).constructor.name}' recieved text for searching: '${this.searchText}'.`);
   });
  }

}
