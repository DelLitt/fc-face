import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from '../../../services/configuration/configuration.service';

@Component({
  selector: 'app-youth-navigation',
  templateUrl: './youth-navigation.component.html',
  styleUrls: ['./youth-navigation.component.scss']
})
export class YouthNavigationComponent implements OnInit {
  private _teamsMenuItems: string[] = null;

  constructor(
    private configuration: ConfigurationService,
    private router: Router,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

  public get teamsMenuItems(): string[] {
    if (this._teamsMenuItems instanceof Array && this._teamsMenuItems.length > 0) {
      return this._teamsMenuItems;
    }

    this.configuration.youthTeamsMap
      .then((result) => {
        this._teamsMenuItems = Array.from(result.keys());
    });
  }

  private get isTeamsActive(): boolean {
    return this.router.isActive('youth/teams', false);
  }

}
