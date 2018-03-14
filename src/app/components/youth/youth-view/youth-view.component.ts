import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-youth-view',
  templateUrl: './youth-view.component.html',
  styleUrls: ['./youth-view.component.scss']
})
export class YouthViewComponent implements OnInit {

  constructor(
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

}
