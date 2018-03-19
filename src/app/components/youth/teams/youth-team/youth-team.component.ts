import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../../services/log.service';
import { SiteMapService } from '../../../../services/site-map.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-youth-team',
  templateUrl: './youth-team.component.html',
  styleUrls: ['./youth-team.component.scss']
})
export class YouthTeamComponent implements OnInit {

  constructor(
    private siteMapService: SiteMapService,
    private activatedRoute: ActivatedRoute,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logWarning(
      `'${(<any>this).constructor.name}'. ${this.siteMapService.getCurrentYouthTeamId(this.activatedRoute.parent.snapshot)}'`);
  }

}
