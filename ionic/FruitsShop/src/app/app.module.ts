import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AboutPage} from '../pages/about/about';
import {StudentsPage}from '../pages/students/students';
import{StudentDetailsPage} from '../pages/student-details/student-details';
import {DepartmentsPage}from '../pages/departments/departments';
import {Dep1Page}from '../pages/dep1/dep1';
import {Dep2Page}from '../pages/dep2/dep2';
import {Dep3Page}from '../pages/dep3/dep3';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FirebaseModule, FirebaseProvider} from 'angular-firebase'

import { TryFireBasePage } from '../pages/try-fire-base/try-fire-base';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,AboutPage,StudentsPage,StudentDetailsPage,DepartmentsPage,Dep1Page,Dep2Page,Dep3Page,TryFireBasePage
  ],
  imports: [
    FirebaseModule,

    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TryFireBasePage,
    ListPage,AboutPage,StudentsPage,StudentDetailsPage,DepartmentsPage,Dep1Page,Dep2Page,Dep3Page
  ],
  providers: [
    StatusBar,FirebaseProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
