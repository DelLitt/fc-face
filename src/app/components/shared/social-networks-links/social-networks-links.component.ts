import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-networks-links',
  templateUrl: './social-networks-links.component.html',
  styleUrls: ['./social-networks-links.component.scss']
})
export class SocialNetworksLinksComponent implements OnInit {

  @Input() public inverse: boolean;

  constructor() { }

  ngOnInit() {
  }

}
