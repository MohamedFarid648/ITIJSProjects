import { HTTP } from '@ionic-native/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{Camera} from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';
import { GithubUsersProvider } from '../providers/github-users/github-users';
import{LocalNotifications } from '@ionic-native/local-notifications';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,AngularFireList } from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyCxCOB3qjsdwUwosa5Njy_4E1e83qAUkZA",
  authDomain: "myfirstionicproject-54d21.firebaseapp.com",
  databaseURL: "https://myfirstionicproject-54d21.firebaseio.com",
  projectId: "myfirstionicproject-54d21",
  storageBucket: "myfirstionicproject-54d21.appspot.com",
  messagingSenderId: "747433423436"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(), 
     AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,Camera,HTTP,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsersProvider,LocalNotifications,Firebase
  ]
})
export class AppModule {}
