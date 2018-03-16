import { Component, OnInit, Input } from '@angular/core';
import { FcLink } from '../../../model/fc-link';
import { Person } from '../../../model/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() public person: Person;
  @Input() public teams: FcLink[];

  constructor() { }

  ngOnInit() {
  }

  private get image() {
    return this.person.img;
  }

}
