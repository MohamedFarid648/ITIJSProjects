import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,AngularFireList, AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import{Camera,CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
MyData:string;
  Gender:string;FullName:string;Password:string;BirthOfDate:string;Faculty:string;ImgBytes:any;
  MyCameraOptions:CameraOptions={
    quality: 100,
    destinationType: this.MyCamera.DestinationType.DATA_URL,
    encodingType: this.MyCamera.EncodingType.JPEG,
    mediaType: this.MyCamera.MediaType.PICTURE}

MyUsersList:AngularFireList<any>;
    constructor(public navCtrl: NavController,public MyCamera : Camera, public MyDB: AngularFireDatabase) {
      this.MyUsersList=this.MyDB.list("Users")
  }

  onRegisterClick(){


    this.MyUsersList.push({
      FullName:this.FullName,
      Gender:this.Gender,
      Faculty:this.Faculty
    })
    //this.MyUsersList.query


    this.navCtrl.push('welcome-page',{
        User:{
          UserFullName:this.FullName,
          UserGender:this.Gender,
          UserBirthOfDate:this.BirthOfDate,
          UserFaculty:this.Faculty,
          ImgBytes:this.ImgBytes
        
        
        }


      });

}

getPicture(){

  this.MyCamera.getPicture(this.MyCameraOptions).then((ImgData)=>{


  this.ImgBytes = 'data:image/jpeg;base64,' + ImgData;
  //You can send it to Backend to create file in server and save path to DB
}, (err) => {
 // Handle error
});


}


}