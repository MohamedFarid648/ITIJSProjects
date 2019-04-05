import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dep1Page } from './dep1';

@NgModule({
  declarations: [
    Dep1Page,
  ],
  imports: [
    IonicPageModule.forChild(Dep1Page),
  ],
})
export class Dep1PageModule {}
