import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {
  private searchText: string;

  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor(private logger: LogService) { }

  ngOnInit() {
  }

  public doSearch() {
    this.logger.logInfo(`Search is called for "${this.searchText}"!`);
    this.search.emit(this.searchText);
  }
}
