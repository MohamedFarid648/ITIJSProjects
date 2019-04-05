import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    const config = {
      apiKey: "AIzaSyCxCOB3qjsdwUwosa5Njy_4E1e83qAUkZA",
      authDomain: "myfirstionicproject-54d21.firebaseapp.com",
      databaseURL: "https://myfirstionicproject-54d21.firebaseio.com",
      projectId: "myfirstionicproject-54d21",
      storageBucket: "myfirstionicproject-54d21.appspot.com",
      messagingSenderId: "747433423436"
    };
   
    firebase.initializeApp(config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

