import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsViewComponent } from '../../components/contacts/contacts-view/contacts-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContactsItemComponent } from '../../components/contacts/contacts-item/contacts-item.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    ContactsViewComponent,
    ContactsItemComponent
  ],
  exports: [
    ContactsViewComponent
  ]
})
export class StaticPagesModule { }
