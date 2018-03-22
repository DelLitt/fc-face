import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SiteMap, SiteMapItem } from '../../../model/app/site-map';
import { SiteMapService } from '../../../services/site-map.service';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-global-navigation',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.scss']
})
export class GlobalNavigationComponent implements OnInit {

  private menuItems: SiteMap;

  constructor(
    private siteMapService: SiteMapService,
    private router: Router,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    this.menuItems = this.getSuitableItems(this.siteMapService.items);
  }

  private getSuitableItems(items: SiteMapItem[]): SiteMap {
    const siteMapItems: SiteMapItem[] = new Array<SiteMapItem>();

    items.forEach(element => {
      if (element.visible) {
        const newElement = Object.assign({}, element);
        siteMapItems.push(newElement);

        if (element.subItems && element.subItems.length > 0) {
          const subItems = this.getSuitableItems(element.subItems);
          newElement.subItems = subItems;
        }
      }
    });

    return siteMapItems;
  }

  private isActive(item: SiteMapItem): boolean {
    return this.router.isActive(item.path, false);
  }

  private hasSubItems(item: SiteMapItem) {
    const condition: boolean = item.subItems instanceof Array && item.subItems.find(s => s.visible) instanceof Object;
    return  condition;
  }
}
