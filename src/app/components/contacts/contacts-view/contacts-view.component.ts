import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.scss']
})
export class ContactsViewComponent implements OnInit {

  private triedToSent = false;
  private user = { name: '', email: '', message: '' };

  constructor(
    private logger: LogService
  ) { }

  ngOnInit() {
  }

  private sendMessage() {
    // TODO: Add sending of email logic here
    //
    this.triedToSent = true;
    this.logger.logDebug(`'${(<any>this).constructor.name}' sending the message is not working correctly.`);
  }

}
