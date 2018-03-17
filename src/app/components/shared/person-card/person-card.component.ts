import { Component, OnInit, Input } from '@angular/core';
import { FcLink } from '../../../model/fc-link';
import { Person } from '../../../model/person';
import { LogService } from '../../../services/log.service';
import { ImageUtilityService } from '../../../services/utilities/image-utility.service';


const bgWidth = 340;
const bgHeight = 192;

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() public person: Person;
  @Input() public teams: FcLink[];
  @Input() public bgDirPath: string;

  constructor(
    private imageUtility: ImageUtilityService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.logger.logDebug(`'${(<any>this).constructor.name}' component is being initialized.`);
    // this.logger.logError(`'${(<any>this).constructor.name}' ${this.person.role} - ${this.person.role.i18nKey}.`);
  }

  private get image(): string {
    return this.person.img;
  }

  private get bgImage(): string {
    const path = this.bgDirPath ? this.bgDirPath + '/bg-person-' + this.person.id + '.png' : null;
    const bgPath = this.imageUtility.getImageAnyway(path, bgWidth, bgHeight);
    return bgPath;
  }

  private getImage(src: string, width: number, height: number): string {
    return this.imageUtility.addFileVariantSize(src, width, height);
  }

}
