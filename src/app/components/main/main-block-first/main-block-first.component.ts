import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-main-block-first',
  templateUrl: './main-block-first.component.html',
  styleUrls: ['./main-block-first.component.scss']
})
export class MainBlockFirstComponent implements OnInit {

  constructor(private logger: LogService) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
  }

}
