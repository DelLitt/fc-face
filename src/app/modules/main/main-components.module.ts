import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBlockFirstComponent } from '../../components/main/main-block-first/main-block-first.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainBlockFirstComponent],
  exports: [MainBlockFirstComponent]
})
export class MainComponentsModule { }
