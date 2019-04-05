import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavcompComponent } from './navcomp/navcomp.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { TextformatDirective } from './textformat.directive';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { SalaryRangePipePipe } from './salary-range-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavcompComponent,
    HomeCompComponent,
    TextformatDirective,
    ChildCompComponent,
    CustomPipePipe,
    SalaryRangePipePipe
  ],
  imports: [

  BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {path:'', component:AppComponent},
      {path:'home', component:HomeCompComponent},
      {path:'profile', component:HomeCompComponent},

      {path:'login', component:HomeCompComponent},

      {path:'**', component:HomeCompComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
