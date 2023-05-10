import { NgModule } from '@angular/core';
import { MzMenuComponent } from './components/mz-menu.component';
import { MzSharedModule } from 'mz-shared';

@NgModule({
  declarations: [
    MzMenuComponent
  ],
  imports: [
    MzSharedModule
  ],
  exports: [
    MzMenuComponent
  ]
})
export class MzMenuModule { }
