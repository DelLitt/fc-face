import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Game } from '../../../model/game';

@Component({
  selector: 'app-tourney-games',
  templateUrl: './tourney-games.component.html',
  styleUrls: ['./tourney-games.component.scss']
})
export class TourneyGamesComponent implements OnInit {
  private dataSource: MatTableDataSource<Game>;
  @Input() public header: string;
  @Input() public showFilter: boolean;

  constructor() { }

  ngOnInit() {
  }

  private applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private get showHeader(): boolean {
    return this.header && this.header.length && this.header.length > 0;
  }

}
