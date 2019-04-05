import { LocalNotifications } from '@ionic-native/local-notifications';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public localNotifications:LocalNotifications, private plt:Platform) {
    
    
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: this.plt.is('Android')? 'file://sound.mp3': 'file://beep.caf'
    });
  }

}
