import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()//for leazy loadng(2)
@IonicPage({
  name:"my-login-page"
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
FullName:string;
Password:string;

  constructor(public navCtrl: NavController,public navParams: NavParams,public storage:Storage
  ,private LocalNotificationsObject:LocalNotifications ,public platForm:Platform
  ) {

    this.storage.get('Name').then((value)=>{
      this.FullName=value;
    });

    this.storage.get('Password').then((value)=>{
      this.Password=value;
      
    });

  }

  ionViewDidLoad() {//like ngoninit()
    console.log('ionViewDidLoad LoginPage');
  }
  

  onLoginClick(){

    this.storage.set("Name",this.FullName);
    this.storage.set("Password",this.Password);

    alert("Login successfully");

    this.LocalNotificationsObject.schedule({
      id:1,
      text:'User '+this.FullName+' is loggined',
      sound:this.platForm.is('Android')? 'file://sound.mp3': 'file://beep.caf',
      trigger: {at: new Date(new Date().getTime()+2000)},
      led: 'FF0000',
      data: {
        // secret: key 
        
        //call back method
        secret:alert("Thank You")
        }
    })

    this.navCtrl.push('welcome-page',{
      User:{
        UserFullName:this.FullName,
        UserGender:'Male',
        UserBirthOfDate:'',
        UserFaculty:'Helwan',
        ImgBytes:''
      
      
      }


    });
  }
}
