import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SiteMap, SiteMapItem } from '../../../model/site-map';
import { SiteMapService } from '../../../services/site-map.service';

@Component({
  selector: 'app-global-navigation',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.scss']
})
export class GlobalNavigationComponent implements OnInit {

  private menuItems: SiteMap;

  constructor(
    private siteMapService: SiteMapService
  ) { }

  ngOnInit() {
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

  private useHref(item: SiteMapItem): boolean {
    const path: any = item.path;
    const cond: boolean = !(typeof item.path === 'undefined' || item.path == null );

    console.log(item.defaultName + ': ' + cond);

    return cond;
  }
}
