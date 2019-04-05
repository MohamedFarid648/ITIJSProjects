import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FunctionalityPage } from '../pages/Functionality/functionality';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestProvider } from '../providers/test/test';

var config = {
  apiKey: "AIzaSyDph_1v-GF-n9ZRg6dYgaZPF5qdsIbRI6A",
  authDomain: "iti-test-248b3.firebaseapp.com",
  databaseURL: "https://iti-test-248b3.firebaseio.com",
  projectId: "iti-test-248b3",
  storageBucket: "iti-test-248b3.appspot.com",
  messagingSenderId: "153928025910"
};


@NgModule({
  declarations: [
    MyApp,
    FunctionalityPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FunctionalityPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabaseModule,
    TestProvider
  ]
})
export class AppModule {}
