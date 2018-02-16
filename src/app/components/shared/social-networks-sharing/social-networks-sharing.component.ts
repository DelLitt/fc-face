import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../../../services/log.service';
import { UrlUtilityService } from '../../../services/utilities/url-utility.service';

@Component({
  selector: 'app-social-networks-sharing',
  templateUrl: './social-networks-sharing.component.html',
  styleUrls: ['./social-networks-sharing.component.scss']
})
export class SocialNetworksSharingComponent implements OnInit {

  private imgSrc: string;

  @Input() public title: string;
  @Input() public description: string;

  constructor(
    private urlUtility: UrlUtilityService,
    private logger: LogService) { }

  @Input() public set imgSrcLocal(value: string) {
    this.imgSrc = this.urlUtility.ToAbsolute(value);
  }

  ngOnInit() {
  }

}
