import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss']
})
export class ContactsItemComponent implements OnInit {

  @Input() public title: string;
  @Input() public phones: string[];
  @Input() public faxes: string[];
  @Input() public email: string;

  constructor() { }

  ngOnInit() {
  }

}
