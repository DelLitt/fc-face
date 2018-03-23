import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RoundSolid } from '../../../model/rounds/round-solid';
import { LogService } from '../../../services/log.service';
import { TourneysRepositoryService } from '../../../services/tourneys-repository.service';
import { I18NService } from '../../../services/i18-n.service';
import { Game } from '../../../model/games/game';

@Component({
  selector: 'app-tourney-games',
  templateUrl: './tourney-games.component.html',
  styleUrls: ['./tourney-games.component.scss']
})
export class TourneyGamesComponent implements OnInit {
  private _loaded: boolean;
  private _tourneyIds: number[] = new Array<number>();
  private _scheduler: RoundSolid[];

  @Input() public header: string;
  @Input() public showFilter: boolean;

  constructor(
    private tourneysRepository: TourneysRepositoryService,
    private i18nService: I18NService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

  @Input() public set tourneyIds(value: number[]) {
    if (!(value instanceof Array)) { return; }

    if (this._tourneyIds.join() !== value.join()) {
      this._tourneyIds = value;
      this.onTourneyIdsLoaded();
    }
  }

  private onTourneyIdsLoaded() {
    this.loadScheduler();
  }

  private loadScheduler() {
    this._loaded = false;

    this.tourneysRepository.getScheduler(this._tourneyIds)
      .then(result => {
        this._scheduler = result;
        this._loaded = true;
        this.logger.logInfo(`'${(<any>this).constructor.name}' has loaded scheduler of tourneys count ${this._tourneyIds.length}.`);
      });
  }

  private applyFilter(filterValue: string) {
    // if (this._scheduler instanceof Array) {
    //   return this._scheduler.filter(s => s.gamesDays.filter(d => d.games.filter(g => g.home.name.includes(filterValue))));
    // }
  }

  private get showHeader(): boolean {
    return this.header && this.header.length && this.header.length > 0;
  }

  private get localeKey() {
    return this.i18nService.localeKey;
  }

  private getScore(game: Game): string {
    return this.hasScoreValue(game.scoreHome) ? game.scoreHome + ':' + game.scoreAway : '';
  }

  private hasScoreAdd(game: Game): boolean {
    return this.hasScoreValue(game.scoreAddHome);
  }

  private hasPenalties(game: Game): boolean {
    return this.hasScoreValue(game.penaltiesHome);
  }

  private hasScoreValue(value: number): boolean {
    return typeof value !== typeof undefined
      && value !== null
      && value > -1;
  }

}
