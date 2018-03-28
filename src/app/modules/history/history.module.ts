import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ShortHistoryComponent } from '../../components/history/short-history/short-history.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    ShortHistoryComponent
  ]
})
export class HistoryModule { }
