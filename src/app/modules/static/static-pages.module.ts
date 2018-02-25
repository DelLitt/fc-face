import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsViewComponent } from '../../components/contacts/contacts-view/contacts-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactsViewComponent
  ],
  exports: [
    ContactsViewComponent
  ]
})
export class StaticPagesModule { }
