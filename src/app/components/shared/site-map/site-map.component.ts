import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { SiteMapItem, SiteMap } from '../../../model/app/site-map';
import { Router } from '@angular/router';
import { SiteMapService } from '../../../services/site-map.service';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent implements OnInit {

  private menuItems: SiteMap;

  constructor(
    private siteMapService: SiteMapService,
    private logger: LogService,
    private router: Router
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

  private hasSubItems(item: SiteMapItem) {
    const condition: boolean = item.subItems instanceof Array && item.subItems.find(s => s.visible) instanceof Object;
    return  condition;
  }

}
