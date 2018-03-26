import { Component, OnInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PlayerStatistics } from '../../../model/player-statistics';
import { LogService } from '../../../services/log.service';
import { StatisticsService } from '../../../services/statistics.service';

const DefPageSize = 25;

@Component({
  selector: 'app-players-statistics',
  templateUrl: './players-statistics.component.html',
  styleUrls: ['./players-statistics.component.scss']
})
export class PlayersStatisticsComponent implements OnInit {

  private _loaded: boolean;
  private displayedColumns = ['personNumber', 'name', 'age', 'games', 'substitutes', 'goals', 'assists', 'yellows', 'reds'];
  private dataSource: MatTableDataSource<PlayerStatistics>;
  private playersStatistics: PlayerStatistics[];
  private _teamId: number;
  private _tourneyIds: number[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() header: string;
  @Input() showFilter: boolean;
  @Input() usePagination: boolean;
  @Input() pageSizeOptions: Array<number> = [5, 10, DefPageSize, 50, 100];
  @Input() pageSize: number = DefPageSize;

  @Input() set teamId(value: number) {
    if (!value) { return; }

    this.logger.logDebug(`'${(<any>this).constructor.name}' has revieved team id ${value}.`);
    this._teamId = value;
    this.loadPlayersStatistics();
  }

  @Input() set tourneyIds(value: number[]) {
    if (!value) { return; }

    this.logger.logDebug(`'${(<any>this).constructor.name}' has revieved tourneyIds count ${value.length}.`);
    this._tourneyIds = value;
    this.loadPlayersStatistics();
  }

  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private statisticsService: StatisticsService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

  private loadPlayersStatistics() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' is trying to load the players statistics.`);
    this._loaded = false;
    this.playersStatistics = [];

    this.statisticsService.getPlayersStatistics(this._teamId, this._tourneyIds)
    .then(result => {
      this.playersStatistics = result;

      // TODO: Implement calculated statistics of several tourneys
      this.dataSource = new MatTableDataSource(this.playersStatistics);

      // waiting for initializing of sort and paginator
      if (!this.sort || ! this.paginator) {
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 1000);
      }

      this._loaded = true;
      this.logger.logInfo(`'${(<any>this).constructor.name}' loaded the players statistics (count: ${this.playersStatistics.length}).`);
    });
  }

  private applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private get showHeader(): boolean {
    return this.header && this.header.length && this.header.length > 0;
  }

}
