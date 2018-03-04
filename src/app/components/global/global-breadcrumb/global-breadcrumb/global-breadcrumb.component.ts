import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SiteMapItem, SiteMap } from '../../../../model/site-map';
import { SiteMapService } from '../../../../services/site-map.service';
import { LogService } from '../../../../services/log.service';

@Component({
  selector: 'app-global-breadcrumb',
  templateUrl: './global-breadcrumb.component.html',
  styleUrls: ['./global-breadcrumb.component.scss']
})
export class GlobalBreadcrumbComponent implements OnInit {

  constructor(
    private siteMapService: SiteMapService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private logger: LogService
  ) { }

  ngOnInit() {
  }

  private get breadcrumbChain(): SiteMap {
    return this.siteMapService.breadcrumbChain;
  }

  private get breadcrumbTitle(): string {
    return this.siteMapService.breadcrumbTitle;
  }

  private get pageTitle(): string {
    this.logger.logDebug(`'${(<any>this).constructor.name}' recieved title '${this.siteMapService.pageTitle}'`);
    return this.siteMapService.pageTitle;
  }

}
