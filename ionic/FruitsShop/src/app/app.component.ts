
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TryFireBasePage } from '../pages/try-fire-base/try-fire-base';

import {AboutPage} from '../pages/about/about';
import {DepartmentsPage}from '../pages/departments/departments';
import * as firebase from 'firebase';

import {StudentsPage}from '../pages/students/students';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    const config = {
      apiKey: "AIzaSyCxCOB3qjsdwUwosa5Njy_4E1e83qAUkZA",
      authDomain: "myfirstionicproject-54d21.firebaseapp.com",
      databaseURL: "https://myfirstionicproject-54d21.firebaseio.com",
      projectId: "myfirstionicproject-54d21",
      storageBucket: "myfirstionicproject-54d21.appspot.com",
      messagingSenderId: "747433423436"
    };
    firebase.initializeApp(config);
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage },
      { title: 'List', component: ListPage } ,           
      { title: 'Students', component: StudentsPage } ,
      { title: 'Departments', component: DepartmentsPage },
      {title:'TryFireBase',component:TryFireBasePage}          
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
