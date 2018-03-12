import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ContactsViewComponent } from '../../components/contacts/contacts-view/contacts-view.component';
import { ContactsItemComponent } from '../../components/contacts/contacts-item/contacts-item.component';
import { StadiumRulesViewComponent } from '../../components/static/stadium-rules-view/stadium-rules-view.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    ContactsViewComponent,
    ContactsItemComponent,
    StadiumRulesViewComponent
  ],
  exports: [
    ContactsViewComponent
  ]
})
export class StaticPagesModule { }
