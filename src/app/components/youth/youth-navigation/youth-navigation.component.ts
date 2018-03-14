import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-youth-navigation',
  templateUrl: './youth-navigation.component.html',
  styleUrls: ['./youth-navigation.component.scss']
})
export class YouthNavigationComponent implements OnInit {

  constructor(
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

}
