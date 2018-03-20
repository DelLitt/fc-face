import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Standing } from '../../../model/standing';
import { LogService } from '../../../services/log.service';
import { StandingsRepositoryService } from '../../../services/standings-repository.service';

const DefPageSize = 25;

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  private _loaded: boolean;
  private displayedColumns = ['position', 'teamName', 'games', 'wins', 'draws', 'loses', 'goals', 'points'];
  private dataSource: MatTableDataSource<Standing>;
  private standings: Standing[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() header: string;
  @Input() showFilter: boolean;
  @Input() usePagination: boolean;
  @Input() pageSizeOptions: Array<number> = [5, 10, DefPageSize, 50, 100];
  @Input() pageSize: number = DefPageSize;
  @Input() tourneyId: number;

  constructor(
    private standingsRepository: StandingsRepositoryService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.loadStandings();
  }

  private loadStandings() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to load the standings.`);
    this._loaded = false;

    this.standingsRepository.getStandings(this.tourneyId)
    .then(result => {
      this.standings = result;
      this.dataSource = new MatTableDataSource(this.standings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the standings (count: ${this.standings.length}) successfully.`);
    });
    // .catch(reason => {
    //   this.router.navigate(['/not-found']);
    // });
  }

  private applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  private get showHeader(): boolean {
    return this.header && this.header.length && this.header.length > 0;
  }

}
