import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComparePage } from './compare';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ComparePage,
  ],
  imports: [
    IonicPageModule.forChild(ComparePage),
    TranslateModule.forChild()
  ],
  exports: [
    ComparePage
  ]
})
export class ComparePageModule {}
