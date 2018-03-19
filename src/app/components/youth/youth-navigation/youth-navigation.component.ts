import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-youth-navigation',
  templateUrl: './youth-navigation.component.html',
  styleUrls: ['./youth-navigation.component.scss']
})
export class YouthNavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

  private get isTeamsActive(): boolean {
    return this.router.isActive('youth/teams', false);
  }

}
