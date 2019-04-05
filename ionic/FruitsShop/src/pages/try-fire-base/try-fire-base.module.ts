import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TryFireBasePage } from './try-fire-base';

@NgModule({
  declarations: [
    TryFireBasePage,
  ],
  imports: [
    IonicPageModule.forChild(TryFireBasePage),
  ],
})
export class TryFireBasePageModule {}
